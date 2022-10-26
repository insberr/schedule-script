import { readFileSync } from "fs"

export function scs(): unknown[] {
    const file = readFileSync('./examples/example.scs', 'utf-8');
    return something(file);
};

export enum TokenType {
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

    Value,

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
}

// makes tokens
// does not work if its minified
export function something(text: string): unknown[] {
    const chars = text.split('');
    const things = [];
    let working = {};
    let index = 0;
    for (index; index < chars.length; null) {
        const last = chars[index - 1];
        const char = chars[index];
        const next = chars[index + 1];

        if (working.type !== undefined) {
            if (working.type === TokenType.Value) {
                if (char.match(/[a-z0-9]/i) === null) {
                    // no longer a value
                    things.push(Object.assign({}, working));
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

            case (char === '\''): {
                things.push({ type: TokenType.SingleQuote, value: char, position: index });
                break;
            }
            case (char === '"'): {
                things.push({ type: TokenType.DoubleQuote, value: char, position: index });
                break;
            }
            case (char === '`'): {
                things.push({ type: TokenType.TemplateQuote, value: char, position: index });
                break;
            }

            case (char === '{'): {
                things.push({ type: TokenType.LeftCurly, value: char, positon: index });
                break;
            }
            case (char === '}'): {
                things.push({ type: TokenType.RightCurly, value: char, positon: index });
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
                things.push({ type: TokenType.WhiteSpace, value: char, position: index });
                break;
            }
            case (char === '\n'): {
                things.push({ type: TokenType.NewLine, value: char, position: index });
                break;
            }

            case (char.match(/[a-z0-9]/i) !== null): {
                working = { type: TokenType.Value, value: '', position: index, end: index };
                continue;
            }
            /*
            // TEMPORARY NUMBERS ARE JUST VALUES
            case (char.match(/[0-9]/i) !== null): {
                working = { type: TokenType.Number, value: '', position: index, end: index };
                continue;
            }
            */
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

// Takes the tokens and figures out what exactly is going on and returns something more meaningful
export function makeUsefullTokens(tokens: unknown[]): unknown[] {
    /*

if (working.type === 'comment') {
if (char !== '\n') {
working.value += char;
working.end = index;
index++;
continue;
} else {
things.push(Object.assign({}, working));
working = {};
index++;
continue;
}
}

if (working.type === 'multilineComment') {
if (char === '/' && index !== working.start) {
working.end = index;
working.value += char;
things.push(Object.assign({}, working));
working = {};
index++;
continue;
} else {
working.value += char;
working.end = index;
index++;
continue;
}
}

if (working.type === 'string') {
if ((char === working.startQuote && last !== '\\') && index !== working.start) {
// end of string
working.endQuote = char;
working.end = index;
things.push(Object.assign({}, working));

working = {};
index++;
continue;
} else {
working.value += char;
working.end = index;
index++;
continue;
}
}
    */
    return tokens;
}

export function toObject(tokens: unknown[]): unknown {
    const newObj = {};
    for (const token of tokens) {
        newObj[token.type + token.position] = token.value
    }
    return { WARNING: "not implemented correctly", ...newObj }
}

export default { scs, something, toObject, TokenType };
