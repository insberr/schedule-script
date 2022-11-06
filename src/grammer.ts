// import { readFileSync } from 'fs';
import * as peggy from 'peggy';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as pegGrammerFile from 'bundle-text:./grammer.pegjs';

//const start = performance.now()
const gened = peggy.generate(/*readFileSync(__dirname + '/grammer.pegjs', 'utf-8')*/ pegGrammerFile, {
    output: 'parser',
    cache: true,
});
//const end = performance.now()
export const parse = gened.parse;
//export const parseTime = end - start;
