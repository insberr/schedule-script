const tokens = [
    {
        "type": "SingleLineComment",
        "value": "// this is an inline comment or whatever",
        "position": 0,
        "end": 40
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 40
    },
    {
        "type": "MultiLineCommentStart",
        "value": "/* this is a multiline comment */",
        "position": 17,
        "end": 73
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 74
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 75
    },
    {
        "type": "SingleLineComment",
        "value": "// Schedules",
        "position": 34,
        "end": 88
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 88
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 108
    },
    {
        "type": "MultiLineCommentStart",
        "value": "/* Idea ?\n        #Passing [5min, nodisplay];\n    */",
        "position": 51,
        "end": 164
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 165
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 179
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 202
    },
    {
        "type": "SingleLineComment",
        "value": "// 24 hour time is default unless am/pm is specified",
        "position": 120,
        "end": 282
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 282
    },
    {
        "type": "SingleLineComment",
        "value": "// 8:00am would work too",
        "position": 159,
        "end": 331
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 331
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 337
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 361
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 384
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 407
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 413
    },
    {
        "type": "SingleLineComment",
        "value": "// Period can be ommited, its default. It is not recommended because of readability",
        "position": 245,
        "end": 513
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 513
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 536
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 559
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 565
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 589
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 612
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 635
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 641
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 665
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 688
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 711
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 717
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 741
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 764
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 787
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 793
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 817
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 840
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 863
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 869
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 870
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 884
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 900
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 926
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 954
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 980
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1003
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1009
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1011
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1012
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1040
    },
    {
        "type": "SingleLineComment",
        "value": "// write code here",
        "position": 635,
        "end": 1063
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1063
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1065
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1066
    },
    {
        "type": "SingleLineComment",
        "value": "// This is just an idea, might be useless",
        "position": 647,
        "end": 1108
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1108
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1136
    },
    {
        "type": "SingleLineComment",
        "value": "// If for some reason the schedule needs to be reused from an existing one",
        "position": 679,
        "end": 1215
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1215
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1232
    },
    {
        "type": "SingleLineComment",
        "value": "// white stuff that changes the values maybe",
        "position": 724,
        "end": 1281
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1281
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1283
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1284
    },
    {
        "type": "SingleLineComment",
        "value": "// events. you could put this in a seperat file aswell",
        "position": 744,
        "end": 1339
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1339
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1340
    },
    {
        "type": "SingleLineComment",
        "value": "// Message only event",
        "position": 769,
        "end": 1362
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1362
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1395
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1423
    },
    {
        "type": "SingleQuote",
        "value": "'Test'",
        "position": 811,
        "end": 1442
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1444
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1446
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1447
    },
    {
        "type": "SingleLineComment",
        "value": "// Single day event",
        "position": 819,
        "end": 1467
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1467
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1487
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1515
    },
    {
        "type": "SingleQuote",
        "value": "'Test'",
        "position": 858,
        "end": 1534
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1536
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1566
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1568
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1569
    },
    {
        "type": "SingleLineComment",
        "value": "// Group of events that use the same schedule, but different days have different messages",
        "position": 876,
        "end": 1659
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1659
    },
    {
        "type": "SingleLineComment",
        "value": "// write ...",
        "position": 908,
        "end": 1672
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1672
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1673
    },
    {
        "type": "SingleLineComment",
        "value": "// A event that reoccurrs",
        "position": 918,
        "end": 1699
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1699
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1720
    },
    {
        "type": "SingleQuote",
        "value": "'1 Hour Late Start'",
        "position": 944,
        "end": 1752
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1754
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1784
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1798
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1825
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1852
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1859
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1861
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 1862
    },
    {
        "type": "MultiLineCommentStart",
        "value": "/* JS Output\n    {\n        Schedules: {\n            Normal: {\n                Classes: [\n                    // the type is written in its ts enum form, in reality itll be a number\n                    { type: Advisory, period: null, ... },\n                    { type: Period, period: 1, ... },\n                ]\n            },\n            ...\n        },\n        Events: [\n            ...\n        ]\n    }\n*/",
        "position": 1016,
        "end": 2268
    },
    {
        "type": "NewLine",
        "value": "\n",
        "position": 2269
    }
]