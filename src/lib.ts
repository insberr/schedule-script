import { Context } from "./execute";
import { Statement, Block } from "./types";

export function isStatement(s: Statement | Block): s is Statement {
    return (s as Statement).statement !== undefined;
}

export function find(context: Context, item: string): any {
    const dt = context[item]
    if (dt != undefined) {
        return dt
    } else {
        if (context.parent) {
            return find(context.parent, item)
        } else {
            //throw new Error("Unable to find item "+item+" in context.")
            return undefined;
        }
    }
}