"use strict";
exports.__esModule = true;
var scs_1 = require("../src/scs");
var fs_1 = require("fs");
var result = (0, scs_1.scs)();
(0, fs_1.writeFileSync)('./tests/outputtokens.js', "const tokens = " + JSON.stringify(result, function (k, v) {
    if (k === 'type')
        return scs_1.TokenType[v];
    return v;
}, 4));
var result2 = (0, scs_1.makeUsefullTokens)(result);
(0, fs_1.writeFileSync)('./tests/outputusefulltokens.js', "const tokens = " + JSON.stringify(result2, function (k, v) {
    if (k === 'type')
        return scs_1.TokenType[v];
    return v;
}, 4));
var combinedBecause = result2.map(function (x) {
    if (x.type === scs_1.TokenType.SimiColon)
        return x.value + '\n';
    return x.value + ' ';
}).join('');
console.log(combinedBecause);
(0, fs_1.writeFileSync)('./tests/theheck.txt', combinedBecause);
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
