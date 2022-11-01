import type { Block } from "./types"
import { isStatement } from "./scs"
import produce from "immer"
import { StatementMap } from "./statements"
import clone from "@ungap/structured-clone"
export type Context = {
    parent?: Context
    stop?: boolean
    statement?: string
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
                    const blk = produce(executeBlock(element.data, {parent: context, statement: item.statement}), (r) => {
                        delete r.parent;
                        delete r.statement;
                    })
                    parsedArgs.push(blk)
                } else {
                    parsedArgs.push(element.data)
                }
            });
            //console.log("executing",item.statement,"with", parsedArgs)
            context = executeStatement(item.statement, parsedArgs, context)
            if (context.stop) {
                return initcontext
            }
        } else {
            context = executeBlock(item, context)
        }
    }
    return context
}

function executeStatement(statement: string, args: PArgs, icontext: Context): Context {
    const def = () => { /*console.warn("Statement "+statement+" not found") */ }
    return produce(icontext, (c) => {
        const exec = StatementMap.get(statement) || def;
        exec(args, c)
    })
}