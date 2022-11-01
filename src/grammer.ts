import { readFileSync } from "fs";
import * as peggy from "peggy";


const gened = peggy.generate(readFileSync(__dirname + "/grammer.pegjs", "utf-8"), {
    output: "parser"
})

export const parse = gened.parse;