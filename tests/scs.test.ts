import { SCS } from "../dist/scs"
import {existsSync, mkdirSync, readFileSync, writeFileSync} from "fs";
import { join } from "path";

const testFile = readFileSync(__dirname+"/../examples/main.ex.scs", "utf8");
const testDir = __dirname + "/../testOut/"
if (!existsSync(testDir)) {
    mkdirSync(testDir);
}

test("parse", () => {
    const scs = new SCS(testFile);
    writeFileSync(join(testDir,"test.ignore.json"), JSON.stringify(scs.parsed, null, 2));
})

test("minify", () => {
    const scs = new SCS(testFile);
    const minified = scs.minify();
    writeFileSync(join(testDir,"test.min.scs"), minified);
    const minscs = new SCS(minified);
    writeFileSync(join(testDir,"test.min.ignore.json"), JSON.stringify(minscs.parsed, null, 2));
    expect(minscs.parsed).toEqual(scs.parsed);
})

test("pretty", () => {
    const scs = new SCS(testFile);
    const pretty = scs.pretty();
    writeFileSync(join(testDir,"test.pretty.scs"), pretty);
    const minscs = new SCS(pretty);
    writeFileSync(join(testDir,"test.pretty.ignore.json"), JSON.stringify(minscs.parsed, null, 2));
    expect(minscs.parsed).toEqual(scs.parsed);
})

test("minify pretty", () => {
    const scs = new SCS(testFile);
    const minified = scs.minify();
    const scsMin = new SCS(minified);
    const pretty = scsMin.pretty();
    writeFileSync(join(testDir,"test.min.pretty.scs"), pretty);
    const minscs = new SCS(pretty);
    writeFileSync(join(testDir,"test.min.pretty.ignore.json"), JSON.stringify(minscs.parsed, null, 2));
    expect(minscs.parsed).toEqual(scs.parsed);
})
