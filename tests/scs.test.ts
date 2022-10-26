import { scs, toObject, TokenType } from '../dist/scs';
import {writeFileSync} from "fs";

test('uh', () => {
    const result = scs();
    writeFileSync('./tests/outputtokens.js', "const tokens = " + JSON.stringify(result, (k, v) => {
        if (k === 'type') return TokenType[v];
        return v;
        }, 4));
    // console.log(result);
})

test('to object', () => {
    const result = scs();
    //console.log(toObject(result));
})