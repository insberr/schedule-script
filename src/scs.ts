//import { inspect } from "util";
import { Context, executeBlock } from './execute';
import { parse as pe } from './grammer';
import { Arg, Block, LintLevel, LintObject, MinifyOptions, Statement } from './types';
export * from './types';
import { isStatement, recurseInto } from './lib';
import { isSameDay } from 'date-fns';
import { checkers } from './checkers';
import { StatementMap } from './statements';

export { _statements } from './statements';

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
                throw new Error('Cannot resolve without a resolver. - Name: ' + name);
            });
        //this.parsedwithComments = this.parsed;
    }
    scheduleFor(date: Date, context?: Context): { schedule: unknown; event: unknown } | undefined {
        // @todo pls add type
        // this function should do way more processing, ie including lunch info
        // also adding default schedules
        const execed = this.exec({ displayDate: date, ...context });
        for (const _element of execed.events) {
            const element: { dates: Date[]; schedule: string } = _element;
            if (!element.dates) {
                continue;
            }
            if (element.dates.find((e) => isSameDay(e, date))) {
                return { schedule: execed.schedules[element.schedule], event: element };
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
                        out += ` /* ${(statement.comment as string).replace(/\n/gm, '')} */ `;
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
            if (statement.statement === 'comment' || statement.statement === 'multicomment') {
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
                        o += ' //' + (statement.comment as { statement: string; args: Arg[]; comment: string }).comment;
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
                if ((statement as Statement).statement === 'comment' || (statement as Statement).statement === 'multicomment') {
                    newLine = '';
                }
            }
            out += newLine + doPretty(statement);
        }

        out = out.trimStart();

        // eslint-disable-next-line no-control-regex
        const backspaces = out.match(/\x08/gm);
        if (backspaces) {
            for (const backspace of backspaces) {
                // get position of backspace
                const pos = out.indexOf(backspace);
                // remove the backspace and the character before it
                out = out.slice(0, pos - 1) + ' ' + out.slice(pos + 1);
            }
        }

        // figure out how to just not make the extra new lines lol
        const extraNewlines = out.match(/\n{3}/gm);
        if (extraNewlines) {
            for (const newline of extraNewlines) {
                // get position of newlines
                const pos = out.indexOf(newline);
                // replace the newlines with one newline
                out = out.slice(0, pos) + '\n\n' + out.slice(pos + newline.length);
            }
        }

        return out;
    }
    exec(initalContext?: Context): Context {
        const ret = executeBlock(this.parsed, initalContext || {}, this.resolver);
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
}

export { SCSFS } from './scsfs';

/*
process.exit(0);
type Token = {
    type: TokenType;
    value: string | number;
    position: number;
    end?: number;
}

enum TokenType {
    SingleQuote,
    DoubleQuote,
    TemplateQuote,

    Colon,
    SimiColon,
    Comma,
    At,

    Value,

    LeftCurly,
    RightCurly,

    LeftBracket,
    RightBracket,

    NewLine,
    WhiteSpace,
    EndOFFile,

    Plus,
    Minus,
    Slash,
    BackSlash,
    Asterisk,
    GreaterThan,
    LessThan,
    Equal,
    Point,

    Unknown,

    // Only used in better tokens
    String,
    Number,
    Time,
    Date,

    Key,
    ColonKeyValue,
    KeyValue,

    ColonTime,

    SimiColonList,
    SimiColonSeperate,

    NewSchedule,
    ScheduleParam,
    ClassParam,
    LunchParam,

    NewEvent,
    EventParam,

    NewOveride,

    // Comments
    SingleLineComment,
    MultiLineCommentStart,
    MultiLineCommentEnd,
    OverideIdentifier,
    StringValue,
    ScheduleIdentifier,
    EventIdentifier,
    TeacherIdentifier,
    LunchIdentifier,
    ClassIdentifier,
    RangeIdentifier,
    IdentifierName,
    EventType,
    ClassType,
    TimeNumber,
    IdentifierInnerParam
}

function scs(): Token[] {
    const file = readFileSync('./examples/new.ex.scs', 'utf-8');
    const newFile = file.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
    // Temporary for pos checking
    writeFileSync('./tests/pos.scs', newFile.replace(/\n/gm, ' '));
    return something(newFile);
};

// makes tokens
// does not work if its minified
function something(text: string): Token[] {
    const chars = text.split('');
    const things: Token[] = [];
    let working: Token | Record<string, unknown> = {};
    let isString = false;
    let index = 0;
    for (index; index < chars.length; null) {
        const last = chars[index - 1];
        const char = chars[index];
        const next = chars[index + 1];

        if (working.type !== undefined) {
            if (working.type === TokenType.Value) {
                if (char.match(/[a-z0-9]/i) === null) {
                    // no longer a value
                    things.push(Object.assign({}, working as Token));
                    working = {};
                    // do not index++; because then it would skip this value that isnt text
                    continue;
                    // whatsdfs
                } else {
                    working.value += char;
                    working.end = index;
                    index++;
                    continue;
                }
            } else if (working.type === TokenType.Number) {
                if (char.match(/[0-9]/i) === null) {
                    // no longer a value
                    things.push(Object.assign({}, working as Token));
                    working = {};
                    // do not index++; because then it would skip this value that isnt text
                    continue;
                    // whatsdfs
                } else {
                    working.value += char;
                    working.end = index;
                    index++;
                    continue;
                }
            }
            // no type matched
            index++;
            continue;
        }

        switch(true) {
            case (char === '/'): {
                things.push({ type: TokenType.Slash, value: char, position: index });
                break;
            }
            case (char === '\\'): {
                things.push({ type: TokenType.BackSlash, value: char, position: index });
                break;
            }
            case (char === '*'): {
                things.push({ type: TokenType.Asterisk, value: char, position: index });
                break;
            }
            case (char === ','): {
                things.push({ type: TokenType.Comma, value: char, position: index });
                break;
            }
            case (char === '@'): {
                things.push({ type: TokenType.At, value: char, position: index });
                break;
            }
            case (char === '.'): {
                things.push({ type: TokenType.Point, value: char, position: index });
                break;
            }

            case (char === '\''): {
                isString = !isString;
                things.push({ type: TokenType.SingleQuote, value: char, position: index });
                break;
            }
            case (char === '"'): {
                isString = !isString;
                things.push({ type: TokenType.DoubleQuote, value: char, position: index });
                break;
            }
            case (char === '`'): {
                isString = !isString;
                things.push({ type: TokenType.TemplateQuote, value: char, position: index });
                break;
            }

            case (char === '{'): {
                things.push({ type: TokenType.LeftCurly, value: char, position: index });
                break;
            }
            case (char === '}'): {
                things.push({ type: TokenType.RightCurly, value: char, position: index });
                break;
            }
            case (char === '['): {
                things.push({ type: TokenType.LeftBracket, value: char, position: index });
                break;
            }
            case (char === ']'): {
                things.push({ type: TokenType.RightBracket, value: char, position: index });
                break;
            }

            case (char === ':'): {
                things.push({ type: TokenType.Colon, value: char, position: index });
                break;
            }
            case (char === ';'): {
                things.push({ type: TokenType.SimiColon, value: char, position: index });
                break;
            }

            case (char === ' '): {
                if (!isString) break;
                things.push({ type: TokenType.WhiteSpace, value: char, position: index });
                break;
            }
            case (char === '\n'): {
                if (!isString) break;
                things.push({ type: TokenType.NewLine, value: char, position: index });
                break;
            }

            case (char.match(/[a-z]/i) !== null): {
                working = { type: TokenType.Value, value: '', position: index, end: index };
                continue;
            }
            
            case (char.match(/[0-9]/i) !== null): {
                working = { type: TokenType.Number, value: '', position: index, end: index };
                continue;
            }
            
            default: {
                // If this runs, theres a problem
                things.push({ type: TokenType.Unknown, value: char, position: index });
                break;
            }
        }

        index++;
    }

    return things;
}

function valueType(tokens: Token[], index: number): TokenType {
    const token = tokens[index];
    const value = token.value;
    // if (isIdentifierName(tokens, index)) return TokenType.IdentifierName;

    if (value === 'overide') return TokenType.OverideIdentifier;
    if (value === 'schedule') return TokenType.ScheduleIdentifier;
    if (value === 'event') return TokenType.EventIdentifier;
    if (value === 'teacher') return TokenType.TeacherIdentifier;
    if (value === 'class') return TokenType.ClassIdentifier;
    if (value === 'lunch') return TokenType.LunchIdentifier;

    if (value === 'to') return TokenType.RangeIdentifier;
    return TokenType.Value;
}

function findExpectedNextMajorType(type: TokenType): { expected: TokenType, changeTo: TokenType } | null {
    switch(type) {
        case TokenType.OverideIdentifier: {
            return { expected: TokenType.Value, changeTo: TokenType.IdentifierName };
        }
        case TokenType.ScheduleIdentifier: {
            return { expected: TokenType.Value, changeTo: TokenType.IdentifierName };
        }
        case TokenType.EventIdentifier: {
            return { expected: TokenType.Value, changeTo: TokenType.EventType };
        }
        case TokenType.TeacherIdentifier: {
            return { expected: TokenType.Value, changeTo: TokenType.IdentifierName };
        }
        case TokenType.ClassIdentifier: {
            return { expected: TokenType.Value, changeTo: TokenType.ClassParam };
        }
        case TokenType.ClassParam: {
            return { expected: TokenType.Number, changeTo: TokenType.TimeNumber };
        }
        case TokenType.LunchIdentifier: {
            return { expected: TokenType.Value, changeTo: TokenType.LunchParam };
        }
        case TokenType.RangeIdentifier: {
            return { expected: TokenType.Number /* or date somehow implement, changeTo: TokenType.TimeNumber };
        }
        default: {
            return null;
        }
    }
}

// Takes the tokens and figures out what exactly is going on and returns something more meaningful
function makeUsefullTokens(tokens: Token[]): Token[] {
    // for each token, find out what its for and make it more usefull
    const useFullTokens: Token[] = [];
    
    let index = 0;
    let expectNextMajorType: { expected: TokenType, changeTo: TokenType } | null = null;
    for (index; index < tokens.length; null) {
        const token = tokens[index];
        
        if (expectNextMajorType !== null && token.type === expectNextMajorType.expected) {
            token.type = expectNextMajorType.changeTo;
            useFullTokens.push(token);
            expectNextMajorType = findExpectedNextMajorType(token.type);
            index++;
            continue;
        }
        
        if (token.type === TokenType.Value) {
            // find out what type of value it is
            let type = valueType(tokens, index);
            expectNextMajorType = findExpectedNextMajorType(type);
            
            useFullTokens.push({ type, value: token.value, position: token.position, end: token.end });
            index++;
            continue;
        }
        if (token.type === TokenType.Number) {
            // find out what type of value it is
            // let type = valueType(tokens, index);
            // expectNextMajorType = findExpectedNextMajorType(type);

            useFullTokens.push({ type: token.type, value: token.value, position: token.position, end: token.end });
            index++;
            continue;
        }

        if (token.type === TokenType.SimiColon) {
            useFullTokens.push({ type: TokenType.SimiColon, value: token.value, position: token.position, end: token.end });
            index++;
            continue;
        }

        if (token.type === TokenType.At) {
            expectNextMajorType = { expected: TokenType.Value, changeTo: TokenType.IdentifierInnerParam };
            index++;
            continue;
        }

        index++;
    }

    return useFullTokens;
}

function toObject(tokens: Token[]): unknown {
    const newObj: Record<string, unknown> = {};
    for (const token of tokens) {
        newObj[token.type + token.position] = token.value
    }
    return { WARNING: "not implemented correctly", ...newObj }
}

export { scs, something, toObject, makeUsefullTokens, TokenType };
*/
