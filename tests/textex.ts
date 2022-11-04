// used for when jest fucking dies
import { SCS } from '../src/scs';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

const testFile = readFileSync(__dirname + '/../examples/main.ex.scs', 'utf8');
const testDir = __dirname + '/../testOut/';
if (!existsSync(testDir)) {
    mkdirSync(testDir);
}

const startp = performance.now();
const scs = new SCS(testFile);
const endp = performance.now();
console.log('parse', endp - startp, 'ms');

const startm = performance.now();
const minified = scs.minify();
const endm = performance.now();
console.log('minify', endm - startm, 'ms');

const startpp = performance.now();
const pretty = scs.pretty();
const endpp = performance.now();

console.log('pretty', endpp - startpp, 'ms');

const starte = performance.now();
const execed = scs.exec({ grade: 10, other_variable: 6969 }); // 10th grade
const ende = performance.now();

console.log('exec', ende - starte, 'ms');

writeFileSync(join(testDir, 'test.ignore.json'), JSON.stringify(scs.parsed, null, 2));
writeFileSync(join(testDir, 'test.min.scs'), minified);
writeFileSync(join(testDir, 'test.pretty.scs'), pretty);
writeFileSync(join(testDir, 'test.exec.json'), JSON.stringify(execed, null, 2));

console.log('testing SCSFS');

import { SCSFS } from '../src/scsfs';
async function testSCSFS() {
    const fs = new SCSFS();

    const startl = performance.now();
    await fs.addAsync(
        {
            // key: filename, value: value passed to fetcher to get the content (ie url)
            'main.ex.scs': 'entrypoint.ex.scs',
            'defines.ex.scs': 'defines.ex.scs',
            'events.ex.scs': 'events.ex.scs',
            'functions.ex.scs': 'functions.ex.scs',
            'schedules.ex.scs': 'schedules.ex.scs',
            'lunches.ex.scs': 'lunches.ex.scs',
        },
        (fl) => {
            return readFile(join(__dirname, '../examples', 'importexample', fl), 'utf8'); // read from the funny directory
        }
    ); // files are fetched using the function in parallel and loaded into the virtual file system
    const endl = performance.now();
    console.log('load', endl - startl, 'ms');

    const starte2 = performance.now();
    const execfs = fs.exec('main.ex.scs', { grade: 10, other_variable: 6969 }); // 10th grade
    const ende2 = performance.now();

    console.log('exec', ende2 - starte2, 'ms');

    writeFileSync(join(testDir, 'test.fs.exec.json'), JSON.stringify(execfs, null, 2));
}
testSCSFS();
