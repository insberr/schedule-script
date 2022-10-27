import { readFileSync, writeFileSync } from "fs"

export type Token = {
    type: TokenType;
    value: string | number;
    position: number;
    end?: number;
}

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
}

export function scs(): Token[] {
    const file = readFileSync('./examples/example.scs', 'utf-8');

    // Temporary for pos checking
    writeFileSync('./tests/pos.scs', file.replace(/\n/gi, ' '));
    return something(file);
};

// makes tokens
// does not work if its minified
export function something(text: string): Token[] {
    const chars = text.split('');
    const things: Token[] = [];
    let working: Token | Record<string, unknown> = {};
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
export function makeUsefullTokens(tokens: Token[]): Token[] {
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

    let index = 0;
    for (index; index < tokens.length; null) {
        const last = tokens[index - 1];
        const token = tokens[index];
        const next = tokens[index + 1];

        if (token.type === TokenType.Slash) {
            if (next.type === TokenType.Slash) {
                // single line comment
                // we choose to ignore them so yeah
                
                // let tempToken = { type: TokenType.SingleLineComment, value: '', position: index, end: index };
                tokens.splice(index, 1);
                let i = true;
                while (i) {
                    if (tokens[index].type === TokenType.NewLine) {
                        // tempToken.end = tokens[index].end || tokens[index].position || -1;
                        tokens.splice(index, 1);
                        // index++;
                        i = false;
                    } else {
                        // tempToken.value += tokens[index].value;
                        // tempToken.end = tokens[index].end || tokens[index].position || -1;
                        tokens.splice(index, 1)
                        index++;
                    }
                }
                // newTokens.push(tempToken);
                continue;
            } else if (next.type === TokenType.Asterisk) {
                // multi line comment
                // ignore these too
                // let tempToken = { type: TokenType.MultiLineCommentStart, value: '', position: index, end: index };
                let i = true;
                /// tokens.splice(index, 1);
                let startIndex = index;
                
                
                while (i) {
                    if (index >= tokens.length) {
                        // just pain
                        console.log(tokens)
                        throw new Error('Unterminated comment at position ' + token.position);
                    } else if (tokens[index].type === TokenType.Slash && tokens[index - 1]?.type === TokenType.Asterisk) {
                        // make sure to include the last slash
                        // tempToken.value += tokens[index].value;
                        // tempToken.end = tokens[index].end || tokens[index].position || -1;
                        
                        // index++;

                        i = false;
                    } else {
                        // tempToken.value += tokens[index].value;
                        // tempToken.end = tokens[index].end || tokens[index].position || -1;
                        
                        index++;
                    }
                }
                tokens.splice(startIndex, index - startIndex);
                index = startIndex;
                // index = startIndex;
                // newTokens.push(tempToken);
                continue;
            } else {
                // just a slash ?
                // TODO add some checks to make sure its not just a random character
                // leave as is
                index++;
                continue;
            }
        } else if (token.type === TokenType.SingleQuote) {
            // single quote string
            // LEFT OFF need to make it not include the quotes lol
            let tempToken = { type: TokenType.SingleQuote, value: '', position: token.position, end: token.position || -1 };
            let startIndex = index;
            // let tempTokenIndex = index;
            // index++; // skip current token as its the first quote

            let i = true;
            while (i) {
                if (index >= tokens.length) {
                    // just pain
                    console.log(tokens)
                    throw new Error('Unterminated string at position ' + token.position);
                    
                } else if ((tokens[index].type === TokenType.SingleQuote && tokens[index].position !== tempToken.position && tokens[index - 1].type !== TokenType.BackSlash)) {
                    // make sure to include the last quote
                    
                    tempToken.end = tokens[index].end || tokens[index].position || -1;
                    index++;

                    i = false;
                } else if (tokens[index].type === TokenType.NewLine && tokens[index - 1].type !== TokenType.BackSlash) {
                    throw new Error(`Unexpected newline in string at ${tokens[index].position}`);
                } else {
                    tempToken.value += tokens[index].value;
                    tempToken.end = tokens[index].end || tokens[index].position || -1;
                    index++;
                }
            }
            tokens.splice(startIndex, index, tempToken);
            // index = startIndex;
            continue;
        } else if (token.type === TokenType.NewLine) {
            // new line
            // ignore these for now
            // newTokens.push(token);
            index++;
            continue;
        } else if (token.type === TokenType.Colon) {
            if (last.type !== TokenType.Value) {
                //because im too lazy to figure out whats before the whitespace
                throw new Error(`Unexpected ${TokenType[last.type]} before colon at position ${token.position}`);
            }
            tokens.splice(index - 1, 1, { ...last, type: TokenType.Key });
            tokens.splice(index, 1, { ...token, type: TokenType.ColonKeyValue });
            
            index++;
            continue;
        }

        // Dev safty, temporary
        new Error('Unknown token type ' + token.type + ' at position ' + token.position);
        index++;
    }
    return tokens;
}

export function toObject(tokens: Token[]): unknown {
    const newObj: Record<string, unknown> = {};
    for (const token of tokens) {
        newObj[token.type + token.position] = token.value
    }
    return { WARNING: "not implemented correctly", ...newObj }
}

export default { scs, something, toObject, makeUsefullTokens, TokenType };
