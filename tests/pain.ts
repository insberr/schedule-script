import { scs, TokenType, makeUsefullTokens } from '../src/scs';
import { writeFileSync } from "fs";


const result = scs();
writeFileSync('./tests/outputtokens.ignore.js', "const tokens = " + JSON.stringify(result, (k, v) => {
    if (k === 'type') return TokenType[v];
    return v;
}, 4));


const result2 = makeUsefullTokens(result);
writeFileSync('./tests/outputusefulltokens.ignore.js', "const tokens = " + JSON.stringify(result2, (k, v) => {
    if (k === 'type') return TokenType[v];
    return v;
}, 4));

const combinedBecause =
    '// Values inside ~ ~ are values that are added by this function, for visual identification of whats going on.\n'
    +
    result2.map(x => {
    if (x.type === TokenType.SimiColon) return x.value + '\n';
    if (x.type === TokenType.IdentifierInnerParam) return '~@~' + x.value;
    return x.value + ' ';
}).join('');
console.log(combinedBecause);
writeFileSync('./tests/theheck.txt', combinedBecause);

// i could write JSON
/*
const jsonSchedules = {
    "normal": {
        "overides": [{
                "name": "cambridge",
                "condition": {
                    "if": {
                        "calsses": {
                            "has": {
                                "periods": [11, 12, 13],
                                "compare": "or"
                            }
                        }
                    }
                }
            }]}}
// or i could write 

Schedule [Normal] {
    // ...
    overides: [
        ScheduleOveride [Cambridge] {
            condition: (classes, displaySchedule, displayEvent) => {
                return classes.has period (11 || 12 || 13)
            }
        }
    ]
}
*/