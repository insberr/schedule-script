import { getHours, getMinutes, getSeconds, parse } from 'date-fns';
import { Context } from './execute';
import { Statement, Block, TimeRange, Time } from './types';

export function isStatement(s: Statement | Block): s is Statement {
    return (s as Statement).statement !== undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function find(context: Context, item: string): any {
    const dt = context[item];
    if (dt != undefined) {
        return dt;
    } else {
        if (context.parent) {
            return find(context.parent, item);
        } else {
            //throw new Error("Unable to find item "+item+" in context.")
            return undefined;
        }
    }
}

export function copyInto(
    src: Record<string, unknown>,
    dest: Record<string, unknown>
) {
    Object.keys(src).forEach((element) => {
        dest[element] = src[element];
    });
}

// range: 10:45 to 11:25
export function parseTimeRange(range: string): TimeRange {
    //console.log(based)
    //console.log(based)
    const [start, end] = range.split(' to '); // ok
    //console.log(start,end)
    const startp = parse(start, 'H:mm', new Date());
    const endp = parse(end, 'H:mm', new Date());
    //console.log(startp, endp)
    return {
        start: dateToTime(startp),
        end: dateToTime(endp),
    };
}

export function dateToTime(time: Date): Time {
    return {
        h: getHours(time),
        m: getMinutes(time),
        s: getSeconds(time),
    };
}
// https://stackoverflow.com/a/50398144
export function getDaysArray(start: Date, end: Date) {
    const arr = [];
    for (
        let dt = new Date(start);
        dt <= new Date(end);
        dt.setDate(dt.getDate() + 1)
    ) {
        arr.push(new Date(dt));
    }
    return arr;
}

export function recurseInto(
    b: Block | Statement,
    cb: (s: Statement, parent?: Statement) => void,
    parent?: Statement
) {
    if (Array.isArray(b)) {
        b.forEach((e) => recurseInto(e, cb, parent));
    } else {
        cb(b, parent);
        b.args.forEach((c) => {
            if (c.type == 'block') {
                recurseInto(c.data, cb, b);
            }
        });
    }
}

export function generateMatch(m: string): { type: string; num: number | null } {
    const ptyper = m.split(' ');
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
    return { num, type };
}

export function parseText(
    t: string
): string | number | boolean | null | undefined {
    if (t === 'true') return true;
    if (t === 'false') return false;
    if (t === 'null') return null;
    if (t === 'undefined') return undefined;

    if (t.includes('.') && !isNaN(parseFloat(t))) return parseFloat(t);
    if (!isNaN(parseInt(t))) return parseInt(t);
    return t;
}
