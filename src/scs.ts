//import { inspect } from "util";
import { Context, executeBlock } from './execute';
import { parse as pe } from './grammer';
import {
    Arg,
    Block,
    LintLevel,
    LintObject,
    MinifyOptions,
    Statement,
} from './types';
export * from './types';
import { isStatement, parseTimeRange, recurseInto } from './lib';
import { isSameDay } from 'date-fns';
import { checkers } from './checkers';
import { StatementMap } from './statements';
import produce from 'immer';

export { _statements } from './statements';
export { checkers as _checkers } from './checkers';

function quoteEscape(str: string): string {
    let newStr = str;
    newStr = newStr.replace(/"/g, '\\"');
    newStr = newStr.replace(/'/g, "\\'");
    return newStr;
}

function stringArgToString(str: string): string {
    return `'${quoteEscape(str)}'`;
}

export class SCS {
    parsed: Block;
    resolver: (name: string) => string;
    //parsedwithComments: Block
    constructor(data: string, resolver?: (name: string) => string) {
        this.parsed = pe(data);
        this.resolver =
            resolver ||
            ((name) => {
                throw new Error(
                    'Cannot resolve without a resolver. - Name: ' + name
                );
            });
        //this.parsedwithComments = this.parsed;
    }

    scheduleFor({
        date,
        user,
        context,
    }: {
        date: Date;
        user: { grade: string; classes: unknown[]; schoolName: string };
        context?: Context;
    }): { schedule: unknown; event: unknown } | undefined {
        // @todo pls add type
        // this function should do way more processing, ie including lunch info
        // also adding default schedules
        const execed = this.exec({ displayDate: date, ...context });
        if (execed.multischool || execed.config.multischool) {
            const schoolExeced = execed.schools[user.schoolName];

            // first see if theres global events
            if (execed.events !== undefined) {
                // combine those with the school events
                console.log(
                    'execed has events and is multischool, no handler implemented for this yet'
                );
            }

            // Same for schedules and everything else really. Priority goes to global

            // For now
            if (schoolExeced === undefined) return undefined;
            if (schoolExeced.events !== undefined) {
                for (const _element of schoolExeced.events) {
                    const element: { dates: Date[]; schedule: string } =
                        _element;
                    if (!element.dates) {
                        continue;
                    }
                    if (element.dates.find((e) => isSameDay(e, date))) {
                        return {
                            schedule: execed.schedules[element.schedule],
                            event: element,
                        };
                    }
                }
            }
        }

        for (const _element of execed.events) {
            const element: { dates: Date[]; schedule: string } = _element;
            if (!element.dates) {
                continue;
            }
            if (element.dates.find((e) => isSameDay(e, date))) {
                return {
                    schedule: execed.schedules[element.schedule],
                    event: element,
                };
            }
        }
    }
    minify(options?: MinifyOptions): string {
        // TODO: finish options

        let out = '';
        function minifyStatement(statement: Statement | Block): string {
            let out = '';
            if (isStatement(statement)) {
                // statement
                let args =
                    ' ' +
                    statement.args
                        .map((arg) => {
                            if (arg.type == 'block') {
                                return minifyStatement(arg.data).trim();
                            } else if (arg.type == 'quote') {
                                return stringArgToString(arg.data);
                            } else if (arg.type == 'text') {
                                return arg.data;
                            } else if (arg.type == 'bracket') {
                                return '[' + arg.data + ']';
                            }
                        })
                        .join(' ');
                if (statement.args.length == 0) {
                    args = '';
                }
                if (statement.statement === 'comment') {
                    if (options?.keepSingleLineComments) {
                        // The extra space at the start and end is important
                        out += ` /* [single] ${statement.comment} */ `;
                    }
                    return out;
                } else if (statement.statement === 'multicomment') {
                    // TODO add uncompress multi line comments
                    if (options?.keepMultiLineComments) {
                        out += ` /* ${(statement.comment as string).replace(
                            /\n/gm,
                            ''
                        )} */ `;
                    }
                    return out;
                }
                out += statement.statement + args;
                out += ';';
            } else {
                // block
                return '{' + statement.map(minifyStatement).join('') + '}';
            }
            return out;
        }
        for (const statement of this.parsed) {
            out += minifyStatement(statement);
        }
        return out;
    }
    lint(): LintObject[] {
        const objs: LintObject[] = [];
        recurseInto(this.parsed, (statement, parent) => {
            if (
                statement.statement === 'comment' ||
                statement.statement === 'multicomment'
            ) {
                return;
            }
            const e = checkers.get(statement.statement);
            if (!e) {
                if (StatementMap.get(statement.statement)) {
                    objs.push({
                        level: LintLevel.info,
                        message: `No checker for statement: ${statement.statement}`,
                        location: statement.location,
                    });
                } else {
                    objs.push({
                        level: LintLevel.error,
                        message: `Unknown statement: ${statement.statement}`,
                        location: statement.location,
                    });
                }
            } else {
                const ret = e(statement, parent);
                if (ret) {
                    objs.push({ ...ret, location: statement.location });
                }
            }
        });
        return objs;
    }
    pretty(): string {
        let deep = 0;
        let out = '';
        function doPretty(statement: Statement | Block): string {
            let o = '';
            const indent = ' '.repeat(deep * 4);
            if (isStatement(statement)) {
                // statement
                let args = '';

                if (statement.args.length > 0) {
                    args =
                        ' ' +
                        statement.args
                            .map((arg) => {
                                if (arg.type == 'block') {
                                    return doPretty(arg.data).trim();
                                } else if (arg.type == 'quote') {
                                    return stringArgToString(arg.data);
                                } else if (arg.type == 'text') {
                                    return arg.data;
                                } else if (arg.type == 'bracket') {
                                    return '[' + arg.data + ']';
                                }
                            })
                            .join(' ');
                }

                if (statement.statement == 'comment') {
                    o += indent + '//' + (statement.comment as string) + '\n';
                } else if (statement.statement == 'multicomment') {
                    o +=
                        indent +
                        '/*\n' +
                        (statement.comment as string)
                            .trimStart()
                            .replace(/^/, '\n' + indent)
                            .replace('\n', indent) +
                        '*/\n';
                } else {
                    o += indent + statement.statement + args;
                    let endNewLine = '\n';
                    if (o.endsWith('}')) {
                        o += ';';
                        endNewLine = '\n\n';
                    } else {
                        o += ';';
                        endNewLine = '\n';
                    }

                    if (statement.comment) {
                        o +=
                            ' //' +
                            (
                                statement.comment as {
                                    statement: string;
                                    args: Arg[];
                                    comment: string;
                                }
                            ).comment;
                    }

                    o += endNewLine;
                }
            } else {
                // block
                o += indent + '{\n';
                deep++;
                for (const statemen of statement) {
                    o += doPretty(statemen);
                }
                deep--;
                o += indent + '}\n';
            }
            return o;
        }
        for (const statement of this.parsed) {
            let newLine = '\n';
            if ((statement as Statement).statement !== undefined) {
                if (
                    (statement as Statement).statement === 'comment' ||
                    (statement as Statement).statement === 'multicomment'
                ) {
                    newLine = '';
                }
            }
            out += newLine + doPretty(statement);
        }

        out = out.trimStart();

        // figure out how to just not make the extra new lines lol
        const extraNewlines = out.match(/\n{3}/gm);
        if (extraNewlines) {
            for (const newline of extraNewlines) {
                // get position of newlines
                const pos = out.indexOf(newline);
                // replace the newlines with one newline
                out =
                    out.slice(0, pos) +
                    '\n\n' +
                    out.slice(pos + newline.length);
            }
        }

        return out;
    }
    exec(initalContext?: Context): Context {
        const ret = executeBlock(
            this.parsed,
            initalContext || {},
            this.resolver
        );
        // transform the context into the right data format here
        // fuck you
        const newret: any = {};
        for (const key in ret) {
            if (key.startsWith('func_')) {
                continue;
            }
            newret[key] = ret[key];
        }
        return newret;
    }
    bundle(): string {
        const e = produce(this.parsed, (p: any) => {
            const dofunny = (b: Block | Statement, parent?: Statement) => {
                if (Array.isArray(b)) {
                    b.forEach((e, i) => {
                        if ((e as Statement).statement == 'import') {
                            const impst = e as Statement;
                            const toimp = impst.args[0].data as string;
                            const imp = this.resolver(toimp);
                            const parsed = new SCS(imp, this.resolver);
                            const bundledDep = parsed.bundle();
                            const newBlock = pe(bundledDep) as Block;
                            newBlock.unshift({
                                statement: 'comment',
                                args: [],
                                comment: ' *' + toimp + '*',
                                location: {
                                    start: { offset: 0, line: 0, column: 0 },
                                    end: { offset: 0, line: 0, column: 0 },
                                },
                            } as Statement);
                            b[i] = newBlock;
                            return;
                        }
                        dofunny(e, parent);
                    });
                } else {
                    b.args.forEach((c) => {
                        if (c.type == 'block') {
                            dofunny(c.data, b);
                        }
                    });
                }
            };
            dofunny(p);
        });
        const n = new SCS('e;');
        n.parsed = e;
        return n.pretty();
    }
}

export { SCSFS } from './scsfs';
