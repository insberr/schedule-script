import type { Block } from "./types"
import clone from "@ungap/structured-clone"
import { isStatement } from "./scs"
export type Context = {
    parent?: Context
    [key: string]: any
}

export type PArgs = (string | Context)[]

function find(context: Context, item: string): any {
    const dt = context[item]
    if (dt != undefined) {
        return dt
    } else {
        if (context.parent) {
            return find(context.parent, item)
        } else {
            throw new Error("Unable to find item "+item+" in context.")
        }
    }
}

export function executeBlock(data: Block, initcontext: Context): Context {
    let context = clone(initcontext)
    for (const item of data) {
        if (isStatement(item)) {
            const parsedArgs: PArgs = []
            item.args.forEach(element => {
                if (element.type == "block") {
                    parsedArgs.push(executeBlock(element.data, {parent: context}))
                } else {
                    parsedArgs.push(element.data)
                }
            });
            //console.log("executing",item.statement,"with", parsedArgs)
            context = executeStatement(item.statement, parsedArgs, context)
        } else {
            context = executeBlock(item, context)
        }
    }
    return context
}

function executeStatement(statement: string, args: PArgs, icontext: Context): Context {
    const context = clone(icontext)
    // use Map for lookup
    return context;
}