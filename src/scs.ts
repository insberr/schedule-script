import { readFileSync, writeFileSync } from "fs"

import { inspect } from "util";
import { parse } from "./grammer.pegjs";
console.log(inspect(parse("// gamer comment\nstatement;statement2 arg1 arg2;"), false, 32 ,true))


process.exit(0)
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
            return { expected: TokenType.Number /* or date somehow implement */, changeTo: TokenType.TimeNumber };
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
