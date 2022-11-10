import type { Block } from './types';
import { find, isStatement } from './lib';
import produce from 'immer';
import { StatementMap } from './statements';
import clone from '@ungap/structured-clone';
import { SCS } from './scs';
export type Context = {
    parent?: Context;
    stop?: boolean;
    statement?: string;
    [key: string]: any;
};

export type PArgs = (string | Context)[];

export function executeBlock(data: Block, initcontext: Context, resolver: (filename: string) => string): Context {
    let context = clone(initcontext);
    for (const item of data) {
        if (isStatement(item)) {
            if (item.statement == 'function') {
                context = produce(context, (c) => {
                    let args: string[] = [];
                    if (item.args.length == 3) {
                        args = (item.args.splice(1, 1)[0].data as string).split(' ');
                    }
                    const name = item.args[0].data as string;
                    const body = item.args[1].data as Block;
                    c['func_' + name] = { args, body };
                });
                continue;
            } else if (item.statement == 'import') {
                const name = item.args[0].data as string;
                const data = resolver(name);
                const parsed = new SCS(data, resolver);
                context = executeBlock(parsed.parsed, context, resolver);
                continue;
            }
            const parsedArgs: PArgs = [];
            item.args.forEach((element) => {
                if (element.type == 'block') {
                    const blk = produce(executeBlock(element.data, { parent: context, statement: item.statement }, resolver), (r) => {
                        delete r.parent;
                        delete r.statement;
                        delete r.stop;
                    });
                    parsedArgs.push(blk);
                } else {
                    if (element.data.startsWith('$')) {
                        const name = element.data.substring(1);
                        const val = find(context, name);
                        if (val == undefined) {
                            throw new Error(`Variable ${name} not found`);
                        }
                        parsedArgs.push(val);
                        return;
                    }
                    parsedArgs.push(element.data);
                }
            });
            if (item.statement == 'call') {
                const tocall = parsedArgs.shift() as string;
                const args = parsedArgs;
                const func = find(context, 'func_' + tocall);
                if (!func) {
                    throw new Error(`Function ${tocall} not found`);
                }
                const argMapping: { [key: string]: any } = {};
                args.forEach((arg, i) => {
                    argMapping[func.args[i]] = arg;
                });
                //console.log("calling function "+tocall+" with args "+JSON.stringify(argMapping))
                context = executeBlock(func.body, { ...context, ...argMapping }, resolver);
                continue;
            }
            //console.log("executing",item.statement,"with", parsedArgs)
            context = executeStatement(item.statement, parsedArgs, context);
            if (context.stop) {
                return initcontext;
            }
        } else {
            context = executeBlock(item, context, resolver);
        }
    }
    return context;
}

function executeStatement(statement: string, args: PArgs, icontext: Context): Context {
    const def = (_: PArgs, c: Context) => {
        c.unknownCommands = c.unknownCommands || [];
        c.unknownCommands.push(statement);
    };
    return produce(icontext, (c) => {
        const exec = StatementMap.get(statement) || def;
        exec(args, c);
    });
}
