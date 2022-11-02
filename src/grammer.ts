import { readFileSync } from "fs";
import * as peggy from "peggy";

//const start = performance.now()
const gened = peggy.generate(readFileSync(__dirname + "/grammer.pegjs", "utf-8"), {
    output: "parser"
})
//const end = performance.now()
export const parse = gened.parse;
//export const parseTime = end - start;