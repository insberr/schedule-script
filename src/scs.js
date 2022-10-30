"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TokenType = exports.makeUsefullTokens = exports.toObject = exports.something = exports.scs = void 0;
var fs_1 = require("fs");
var TokenType;
(function (TokenType) {
    TokenType[TokenType["SingleQuote"] = 0] = "SingleQuote";
    TokenType[TokenType["DoubleQuote"] = 1] = "DoubleQuote";
    TokenType[TokenType["TemplateQuote"] = 2] = "TemplateQuote";
    TokenType[TokenType["Colon"] = 3] = "Colon";
    TokenType[TokenType["SimiColon"] = 4] = "SimiColon";
    TokenType[TokenType["Comma"] = 5] = "Comma";
    TokenType[TokenType["At"] = 6] = "At";
    TokenType[TokenType["Value"] = 7] = "Value";
    TokenType[TokenType["LeftCurly"] = 8] = "LeftCurly";
    TokenType[TokenType["RightCurly"] = 9] = "RightCurly";
    TokenType[TokenType["LeftBracket"] = 10] = "LeftBracket";
    TokenType[TokenType["RightBracket"] = 11] = "RightBracket";
    TokenType[TokenType["NewLine"] = 12] = "NewLine";
    TokenType[TokenType["WhiteSpace"] = 13] = "WhiteSpace";
    TokenType[TokenType["EndOFFile"] = 14] = "EndOFFile";
    TokenType[TokenType["Plus"] = 15] = "Plus";
    TokenType[TokenType["Minus"] = 16] = "Minus";
    TokenType[TokenType["Slash"] = 17] = "Slash";
    TokenType[TokenType["BackSlash"] = 18] = "BackSlash";
    TokenType[TokenType["Asterisk"] = 19] = "Asterisk";
    TokenType[TokenType["GreaterThan"] = 20] = "GreaterThan";
    TokenType[TokenType["LessThan"] = 21] = "LessThan";
    TokenType[TokenType["Equal"] = 22] = "Equal";
    TokenType[TokenType["Point"] = 23] = "Point";
    TokenType[TokenType["Unknown"] = 24] = "Unknown";
    // Only used in better tokens
    TokenType[TokenType["String"] = 25] = "String";
    TokenType[TokenType["Number"] = 26] = "Number";
    TokenType[TokenType["Time"] = 27] = "Time";
    TokenType[TokenType["Date"] = 28] = "Date";
    TokenType[TokenType["Key"] = 29] = "Key";
    TokenType[TokenType["ColonKeyValue"] = 30] = "ColonKeyValue";
    TokenType[TokenType["KeyValue"] = 31] = "KeyValue";
    TokenType[TokenType["ColonTime"] = 32] = "ColonTime";
    TokenType[TokenType["SimiColonList"] = 33] = "SimiColonList";
    TokenType[TokenType["SimiColonSeperate"] = 34] = "SimiColonSeperate";
    TokenType[TokenType["NewSchedule"] = 35] = "NewSchedule";
    TokenType[TokenType["ScheduleParam"] = 36] = "ScheduleParam";
    TokenType[TokenType["ClassParam"] = 37] = "ClassParam";
    TokenType[TokenType["LunchParam"] = 38] = "LunchParam";
    TokenType[TokenType["NewEvent"] = 39] = "NewEvent";
    TokenType[TokenType["EventParam"] = 40] = "EventParam";
    TokenType[TokenType["NewOveride"] = 41] = "NewOveride";
    // Comments
    TokenType[TokenType["SingleLineComment"] = 42] = "SingleLineComment";
    TokenType[TokenType["MultiLineCommentStart"] = 43] = "MultiLineCommentStart";
    TokenType[TokenType["MultiLineCommentEnd"] = 44] = "MultiLineCommentEnd";
    TokenType[TokenType["OverideIdentifier"] = 45] = "OverideIdentifier";
    TokenType[TokenType["StringValue"] = 46] = "StringValue";
    TokenType[TokenType["ScheduleIdentifier"] = 47] = "ScheduleIdentifier";
    TokenType[TokenType["EventIdentifier"] = 48] = "EventIdentifier";
    TokenType[TokenType["TeacherIdentifier"] = 49] = "TeacherIdentifier";
    TokenType[TokenType["LunchIdentifier"] = 50] = "LunchIdentifier";
    TokenType[TokenType["ClassIdentifier"] = 51] = "ClassIdentifier";
    TokenType[TokenType["RangeIdentifier"] = 52] = "RangeIdentifier";
    TokenType[TokenType["IdentifierName"] = 53] = "IdentifierName";
    TokenType[TokenType["EventType"] = 54] = "EventType";
    TokenType[TokenType["ClassType"] = 55] = "ClassType";
    TokenType[TokenType["TimeNumber"] = 56] = "TimeNumber";
    TokenType[TokenType["IdentifierInnerParam"] = 57] = "IdentifierInnerParam";
})(TokenType || (TokenType = {}));
exports.TokenType = TokenType;
function scs() {
    var file = (0, fs_1.readFileSync)('./examples/new.ex.scs', 'utf-8');
    var newFile = file.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
    // Temporary for pos checking
    (0, fs_1.writeFileSync)('./tests/pos.scs', newFile.replace(/\n/gm, ' '));
    return something(newFile);
}
exports.scs = scs;
;
// makes tokens
// does not work if its minified
function something(text) {
    var chars = text.split('');
    var things = [];
    var working = {};
    var isString = false;
    var index = 0;
    for (index; index < chars.length; null) {
        var last = chars[index - 1];
        var char = chars[index];
        var next = chars[index + 1];
        if (working.type !== undefined) {
            if (working.type === TokenType.Value) {
                if (char.match(/[a-z0-9]/i) === null) {
                    // no longer a value
                    things.push(Object.assign({}, working));
                    working = {};
                    // do not index++; because then it would skip this value that isnt text
                    continue;
                    // whatsdfs
                }
                else {
                    working.value += char;
                    working.end = index;
                    index++;
                    continue;
                }
            }
            else if (working.type === TokenType.Number) {
                if (char.match(/[0-9]/i) === null) {
                    // no longer a value
                    things.push(Object.assign({}, working));
                    working = {};
                    // do not index++; because then it would skip this value that isnt text
                    continue;
                    // whatsdfs
                }
                else {
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
        switch (true) {
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
                if (!isString)
                    break;
                things.push({ type: TokenType.WhiteSpace, value: char, position: index });
                break;
            }
            case (char === '\n'): {
                if (!isString)
                    break;
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
exports.something = something;
function valueType(tokens, index) {
    var token = tokens[index];
    var value = token.value;
    // if (isIdentifierName(tokens, index)) return TokenType.IdentifierName;
    if (value === 'overide')
        return TokenType.OverideIdentifier;
    if (value === 'schedule')
        return TokenType.ScheduleIdentifier;
    if (value === 'event')
        return TokenType.EventIdentifier;
    if (value === 'teacher')
        return TokenType.TeacherIdentifier;
    if (value === 'class')
        return TokenType.ClassIdentifier;
    if (value === 'lunch')
        return TokenType.LunchIdentifier;
    if (value === 'to')
        return TokenType.RangeIdentifier;
    return TokenType.Value;
}
function findExpectedNextMajorType(type) {
    switch (type) {
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
function makeUsefullTokens(tokens) {
    // for each token, find out what its for and make it more usefull
    var useFullTokens = [];
    var index = 0;
    var expectNextMajorType = null;
    for (index; index < tokens.length; null) {
        var token = tokens[index];
        if (expectNextMajorType !== null && token.type === expectNextMajorType.expected) {
            token.type = expectNextMajorType.changeTo;
            useFullTokens.push(token);
            expectNextMajorType = findExpectedNextMajorType(token.type);
            index++;
            continue;
        }
        if (token.type === TokenType.Value) {
            // find out what type of value it is
            var type = valueType(tokens, index);
            expectNextMajorType = findExpectedNextMajorType(type);
            useFullTokens.push({ type: type, value: token.value, position: token.position, end: token.end });
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
exports.makeUsefullTokens = makeUsefullTokens;
function toObject(tokens) {
    var newObj = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        newObj[token.type + token.position] = token.value;
    }
    return __assign({ WARNING: "not implemented correctly" }, newObj);
}
exports.toObject = toObject;
