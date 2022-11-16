import type { Context, PArgs } from './execute';
import {
    find,
    copyInto,
    parseTimeRange,
    getDaysArray,
    generateMatch,
} from './lib';
import { isAfter, isBefore, isSameDay } from 'date-fns';
type StatementFunc = (args: PArgs, context: Context) => void;

export const StatementMap = new Map<string, StatementFunc>()
    .set('schedule', (args, c) => {
        if (c.statement) {
            //console.log(c.statement)
            if (c.statement == 'event') {
                const schedules = find(c, 'schedules');
                if (!schedules) {
                    throw new Error('unable to find schedules');
                }
                const sch = schedules[args[0] as string];
                if (!sch) {
                    throw new Error(
                        ('Cannot find schedule ' + args[0]) as string
                    );
                }
                c.schedule = args[0] as string;
            } else {
                c.schedule = args;
                return;
            }
        } else {
            // define top level schedule
            c.schedules = c.schedules || {};
            const name = args.shift() as string;
            const data = args.pop() as Context;
            c.schedules[name] = data;
        }
    })
    .set('class', (args, c) => {
        c.classes = c.classes || [];
        let outc: any = {};
        const typeM = args[0] as string;
        const timeRange = args[1] as string;
        const ptimerange = parseTimeRange(timeRange);
        outc = { ...ptimerange };
        const { type, num } = generateMatch(typeM);
        outc = { ...outc, type, num };
        c.classes.push(outc);
    })
    .set('event', (args, c) => {
        c.events = c.events || [];
        c.events.push(args[0]);
    })
    .set('terms', (args, c) => {
        let t: { termIndex: number; start: Date; end: Date }[] = (
            args[0] as Context
        ).terms;
        if (t == undefined) {
            t = [];
        }
        c.terms = t;
        const displayDate = find(c, 'displayDate') || new Date();
        const newTerm = t.filter((term) => {
            return (
                (isAfter(displayDate, term.start) ||
                    isSameDay(displayDate, term.start)) &&
                (isBefore(displayDate, term.end) ||
                    isSameDay(displayDate, term.end))
            );
        });
        if (newTerm.length == 0) {
            c.term = 0;
        } else {
            c.term = newTerm[0].termIndex + 1;
        }
    })
    .set('term', (args, c) => {
        const termIndex = parseInt(args[0] as string) - 1;
        const start = new Date(args[1] as string);
        const end = new Date(args[2] as string);
        c.terms = c.terms || [];
        c.terms.push({ termIndex, start, end });
    })
    .set('only', (args, c) => {
        // only <item> <compare> searches the context for the item "item" and compares it,
        // @TODO allow many types of comparisons
        const [item, compare] = args as string[];
        const toc = find(c, item);
        if (toc == undefined) {
            console.warn(
                'Unable to find item',
                item,
                'in context, this is probably an issue'
            );
        }
        c.stop = toc?.toString() != compare;
    })
    .set('lunches', (args, c) => {
        const tech = args[0] as Context;
        c.lunches = {};
        tech.teachers.forEach((element: any) => {
            c.lunches[element.id] = element.lunch;
        });
        c.teachers = tech.teachers;
    })
    .set('teacher', (args, c) => {
        const [name, id, _lunch] = args as string[];
        const lunch = parseInt(_lunch);
        c.teachers = c.teachers || [];
        c.teachers.push({ name, id, lunch });
    })
    .set('inherit', (args, c) => {
        const toHer = args[0] as string;
        const schs = find(c, 'schedules');
        if (!schs) {
            throw new Error('No schedules in file!');
        }
        const t = schs[toHer];
        if (!t) {
            throw new Error('Schedule ' + toHer + ' doesnt exist!');
        }
        copyInto(t, c);
    })
    .set('description', setSimple('description'))
    .set('info', setSimple('info'))
    .set('message', setSimple('message'))
    .set('date', (args, c) => {
        c.dates = c.dates || [];
        c.dates.push(new Date(args[0] as string));
    })
    .set('from', (args, c) => {
        if (c.statement == 'event') {
            const from = args[0] as string;
            const tost = args[1] as string;
            if (tost != 'to') {
                console.warn("(from) Expected 'to' but got", tost);
            }
            const to = args[2] as string;
            c.dates = c.dates || [];
            c.dates.push(...getDaysArray(new Date(from), new Date(to)));
        } else if (c.statement == 'lunchConfig') {
            c.studentLunches = c.studentLunches || {};
            c.studentLunches.basedOn = args[0] as string;
        } else {
            c.from = args;
        }
    })
    .set('set', (args, c) => {
        const key = args.shift() as string;
        const value = args.shift();
        c[key] = value;
    })
    .set('config', (args, c) => {
        c.config = c.config || {};
        const key = args.shift() as string;
        const value = args.shift();
        c.config[key] = value;
    })
    .set('comment', empty)
    .set('multicomment', empty)
    .set('import', empty)
    .set('function', empty)
    .set('call', empty)
    .set('lunchConfig', (args, c) => {
        copyInto(args[0] as Context, c);
    })
    .set('passing', (args, c) => {
        c.studentLunches = c.studentLunches || {};
        c.studentLunches.passing = args[0] as string;
    })
    .set('lunch', (args, c) => {
        const [lunchid, durataion] = args as string[];
        c.studentLunches = c.studentLunches || {};
        c.studentLunches.lunches = c.studentLunches.lunches || {};
        c.studentLunches.lunches[lunchid] = parseTimeRange(durataion);
    })
    .set('user', (args, c) => {
        // currently only uses `user classes contains` so thats all im going to support
        const classes = args.shift();
        const contains = args.shift();
        if (classes != 'classes' || contains != 'contains') {
            throw new Error('Invalid user statement (lmao)');
        }
        const checks: { type: string; num: number | null }[] = [];
        for (const what of args) {
            checks.push(generateMatch(what as string));
        }
        // format
        // {
        // "user": {classes: [{type: "period", num: 1}, {type: "period", num: 2}]}
        // }
        // gl hf
        const userinfo = find(c, 'user') as
            | { classes?: { type: string; num: number | null }[] }
            | undefined;
        if (!userinfo) {
            c.stop = true;
            return;
        }
        userinfo.classes = userinfo.classes || [];
        for (const check of checks) {
            const found = userinfo.classes.find(
                (e) => e.type == check.type && e.num == check.num
            );
            if (found) {
                c.stop = false;
                return;
            }
        }
        c.stop = true;
    })
    .set('self', (args, c) => {
        // currently only uses `self classes contains` so thats all im going to support
        const classes = args.shift();
        const contains = args.shift();
        if (classes != 'classes' || contains != 'contains') {
            throw new Error('Invalid self statement (lmao)');
        }
        const checks: { type: string; num: number | null }[] = [];
        for (const what of args) {
            checks.push(generateMatch(what as string));
        }
        // format
        // {
        // "user": {classes: [{type: "period", num: 1}, {type: "period", num: 2}]}
        // }
        // gl hf
        const cls = c.classes as
            | { type: string; num: number | null }[]
            | undefined;
        if (!cls) {
            c.stop = true;
            return;
        }
        for (const check of checks) {
            const found = cls.find(
                (e) => e.type == check.type && e.num == check.num
            );
            if (found) {
                c.stop = false;
                return;
            }
        }
        c.stop = true;
    })
    .set('day', (args, c) => {
        const _start = args.shift() as string;
        let data: Context;
        let _end: string;
        if (typeof args[0] == 'string') {
            const to = args.shift();
            if (to != 'to') {
                throw new Error('expected to, got ' + to);
            }
            _end = args.shift() as string;
            data = args.shift() as Context;
        } else {
            _end = _start;
            data = args.shift() as Context;
        }
        const end = parseInt(_end) + 1;
        const start = parseInt(_start);
        const values = Array.from({ length: end - start }, (v, k) => k + start);
        c.days = c.days || {};
        values.forEach((m) => {
            c.days[m.toString()] = data;
        });
    })
    .set('events', (args, c) => {
        const days = (args[0] as Context).days;
        c.eventOverrides = days;
    })
    .set('remove', (args, c) => {
        const classes = c.classes as
            | { type: string; num: number | null }[]
            | undefined;
        if (!classes) {
            return;
        }
        const toRemove = args.map((e) => generateMatch(e as string));
        let lastRemovedIndex = -1;
        c.classes = classes.filter((e, i) => {
            const found = toRemove.find(
                (f) => f.type == e.type && f.num == e.num
            );
            if (found) {
                lastRemovedIndex = i;
            }
            return !found;
        });
        c.lastOP = lastRemovedIndex;
    })
    .set('force', (args, c) => {
        c.forced = c.forced || {};
        const key = args.shift() as string;
        const value = args.shift();
        c.forced[key] = value;
    })
    .set('replace', (args, c) => {
        /*replace class [arrival] with {
            class [period 0] [6:30 to 7:30];
        };*/
        args.shift(); // class
        const matcher = args.shift() as string;
        args.shift(); // with
        const data = args.shift() as Context;
        if (!data.classes) {
            return;
        }
        const classes = c.classes as
            | { type: string; num: number | null }[]
            | undefined;
        if (!classes) {
            return;
        }
        const toRemove = generateMatch(matcher);
        const indexOfToReplace = classes.findIndex((e) => {
            return toRemove.type == e.type && toRemove.num == e.num;
        });
        if (indexOfToReplace == -1) {
            return;
        }
        (c.classes as any[]).splice(indexOfToReplace, 1, ...data.classes);
        c.lastOP = indexOfToReplace;
    });

function empty(args: PArgs, c: Context) {
    c;
}

function setSimple(name: string) {
    return (args: PArgs, c: Context) => {
        c[name] = args.join(' ');
    };
}
// you could import statements from other files and add them to the map.

export const _statements = Array.from(StatementMap.keys());
