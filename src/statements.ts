import type { Context, PArgs } from './execute';
import { find, copyInto, parseTimeRange, getDaysArray } from './lib';
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
                    throw new Error(('Cannot find schedule ' + args[0]) as string);
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
        const ptyper = typeM.split(' ');
        let num: number | null = null;
        let type = 'period';
        if (ptyper.length == 1) {
            const isNum = /^\d+$/.test(ptyper[0]);
            if (isNum) {
                num = parseInt(ptyper[0]);
            } else {
                type = ptyper[0];
            }
        } else {
            const [rtype, rnum] = ptyper;
            num = parseInt(rnum);
            type = rtype;
        }
        outc = { ...outc, type, num };
        c.classes.push(outc);
    })
    .set('event', (args, c) => {
        c.events = c.events || [];
        c.events.push(args[0]);
    })
    .set('terms', (args, c) => {
        const t: { termIndex: number; start: Date; end: Date }[] = (args[0] as Context).terms;
        c.terms = t;
        const displayDate = find(c, 'displayDate') || new Date();
        const newTerm = t.filter((term) => {
            return (
                (isAfter(displayDate, term.start) || isSameDay(displayDate, term.start)) &&
                (isBefore(displayDate, term.end) || isSameDay(displayDate, term.end))
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
            console.warn('Unable to find item', item, 'in context, this is probably an issue');
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
