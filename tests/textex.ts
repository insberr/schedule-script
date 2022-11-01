// used for when jest fucking dies
import { SCS } from "../src/scs";
import {existsSync, mkdirSync, readFileSync, writeFileSync} from "fs";
import { join } from "path";

const testFile = readFileSync(__dirname+"/../examples/main.ex.scs", "utf8");
const testDir = __dirname + "/../testOut/"
if (!existsSync(testDir)) {
    mkdirSync(testDir);
}

const startp = performance.now()
const scs = new SCS(testFile);
const endp = performance.now()
console.log("parse", endp-startp,"ms")

const startm = performance.now()
const minified = scs.minify();
const endm = performance.now()
console.log("minify", endm-startm,"ms")

const startpp = performance.now()
const pretty = scs.pretty();
const endpp = performance.now()

console.log("pretty", endpp-startpp,"ms")

const starte = performance.now()
const execed = scs.exec({grade: 10, other_variable: 6969}) // 10th grade
const ende = performance.now()

console.log("exec", ende-starte,"ms")

writeFileSync(join(testDir,"test.ignore.json"), JSON.stringify(scs.parsed, null, 2));
writeFileSync(join(testDir,"test.min.scs"), minified);
writeFileSync(join(testDir,"test.pretty.scs"), pretty);
writeFileSync(join(testDir,"test.exec.json"), JSON.stringify(execed, null, 2))