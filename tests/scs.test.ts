import { scs, toObject, TokenType, makeUsefullTokens } from '../dist/scs';
import {writeFileSync} from "fs";

test('uh', () => {
    const result = scs();
    writeFileSync('./tests/outputtokens.js', "const tokens = " + JSON.stringify(result, (k, v) => {
        if (k === 'type') return TokenType[v];
        return v;
        }, 4));
    // console.log(result);
})

test('make useful', () => {
    const result = makeUsefullTokens(scs());
    writeFileSync('./tests/outputusefulltokens.js', "const tokens = " + JSON.stringify(result, (k, v) => {
        if (k === 'type') return TokenType[v];
        return v;
    }, 4));
    // console.log(result);
})

test('to object', () => {
    const result = scs();
    //console.log(toObject(result));
})