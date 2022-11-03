import { getHours, getMinutes, getSeconds, parse } from 'date-fns';
import { Context } from './execute';
import { Statement, Block, TimeRange, Time } from './types';

export function isStatement(s: Statement | Block): s is Statement {
    return (s as Statement).statement !== undefined;
}

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

export function copyInto(src: any, dest: any) {
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
    for (let dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
}
