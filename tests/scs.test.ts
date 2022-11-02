import { SCS, SCSFS } from "../src/scs"
import {existsSync, mkdirSync, readFileSync, writeFileSync} from "fs";
import { join } from "path";
import { readFile } from "fs/promises";
//mport { serialize } from "@ungap/structured-clone";
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

test("exec", () => {
    const scs = new SCS(testFile)
    const execed = scs.exec()
    //console.dir(execed,{depth:32})
    writeFileSync(join(testDir, "test.exec.json"), JSON.stringify(execed, null, 2))
})

test("scsfs", async () => {
    const fs = new SCSFS;
    const manifest = { // key: filename, value: value passed to fetcher to get the content (ie url)
        "main.ex.scs": "entrypoint.ex.scs",
        "defines.ex.scs": "defines.ex.scs",
        "events.ex.scs": "events.ex.scs",
        "functions.ex.scs": "functions.ex.scs",
        "schedules.ex.scs": "schedules.ex.scs",
    }
    await fs.addAsync(manifest, (fl) => {
        return readFile(join(__dirname, "../examples", "importexample", fl), "utf8") // read from the funny directory
    })
    const execed = fs.exec("main.ex.scs")
    writeFileSync(join(testDir,"test.fs.exec.json"), JSON.stringify(execed, null, 2))
})