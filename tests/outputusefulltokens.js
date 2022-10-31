const tokens = [
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 1,
        "end": 7
    },
    {
        "type": "IdentifierName",
        "value": "defaultZero",
        "position": 9,
        "end": 19
    },
    {
        "type": "Value",
        "value": "user",
        "position": 27,
        "end": 30
    },
    {
        "type": "Value",
        "value": "classes",
        "position": 32,
        "end": 38
    },
    {
        "type": "Value",
        "value": "contains",
        "position": 40,
        "end": 47
    },
    {
        "type": "Value",
        "value": "period",
        "position": 49,
        "end": 54
    },
    {
        "type": "Number",
        "value": "0",
        "position": 56,
        "end": 56
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 57
    },
    {
        "type": "ScheduleIdentifier",
        "value": "schedule",
        "position": 63,
        "end": 70
    },
    {
        "type": "IdentifierName",
        "value": "classes",
        "position": 72,
        "end": 78
    },
    {
        "type": "Value",
        "value": "contains",
        "position": 80,
        "end": 87
    },
    {
        "type": "Value",
        "value": "arrival",
        "position": 90,
        "end": 96
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 98
    },
    {
        "type": "Value",
        "value": "replace",
        "position": 105,
        "end": 111
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 113,
        "end": 117
    },
    {
        "type": "ClassParam",
        "value": "arrival",
        "position": 120,
        "end": 126
    },
    {
        "type": "Value",
        "value": "with",
        "position": 129,
        "end": 132
    },
    {
        "type": "Value",
        "value": "period",
        "position": 137,
        "end": 142
    },
    {
        "type": "Number",
        "value": "0",
        "position": 144,
        "end": 144
    },
    {
        "type": "Number",
        "value": "6",
        "position": 147,
        "end": 147
    },
    {
        "type": "Number",
        "value": "30",
        "position": 149,
        "end": 150
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 152,
        "end": 153
    },
    {
        "type": "TimeNumber",
        "value": "7",
        "position": 155,
        "end": 155
    },
    {
        "type": "Number",
        "value": "30",
        "position": 157,
        "end": 158
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 161
    },
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 166,
        "end": 172
    },
    {
        "type": "IdentifierName",
        "value": "cambridge",
        "position": 174,
        "end": 182
    },
    {
        "type": "IdentifierInnerParam",
        "value": "options",
        "position": 201,
        "end": 207
    },
    {
        "type": "Value",
        "value": "times",
        "position": 210,
        "end": 214
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 216
    },
    {
        "type": "Value",
        "value": "user",
        "position": 237,
        "end": 240
    },
    {
        "type": "Value",
        "value": "classes",
        "position": 242,
        "end": 248
    },
    {
        "type": "Value",
        "value": "contains",
        "position": 250,
        "end": 257
    },
    {
        "type": "Value",
        "value": "periods",
        "position": 259,
        "end": 265
    },
    {
        "type": "Number",
        "value": "11",
        "position": 267,
        "end": 268
    },
    {
        "type": "Number",
        "value": "12",
        "position": 271,
        "end": 272
    },
    {
        "type": "Number",
        "value": "13",
        "position": 275,
        "end": 276
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 277
    },
    {
        "type": "IdentifierInnerParam",
        "value": "section",
        "position": 303,
        "end": 309
    },
    {
        "type": "Value",
        "value": "grade10",
        "position": 311,
        "end": 317
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 318
    },
    {
        "type": "Value",
        "value": "user",
        "position": 324,
        "end": 327
    },
    {
        "type": "Value",
        "value": "grade",
        "position": 329,
        "end": 333
    },
    {
        "type": "Number",
        "value": "10",
        "position": 335,
        "end": 336
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 337
    },
    {
        "type": "Value",
        "value": "remove",
        "position": 348,
        "end": 353
    },
    {
        "type": "Value",
        "value": "period",
        "position": 356,
        "end": 361
    },
    {
        "type": "Number",
        "value": "1",
        "position": 363,
        "end": 363
    },
    {
        "type": "Value",
        "value": "period",
        "position": 369,
        "end": 374
    },
    {
        "type": "Number",
        "value": "2",
        "position": 376,
        "end": 376
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 378
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 384,
        "end": 389
    },
    {
        "type": "Value",
        "value": "period",
        "position": 394,
        "end": 399
    },
    {
        "type": "Number",
        "value": "11",
        "position": 401,
        "end": 402
    },
    {
        "type": "Value",
        "value": "times",
        "position": 405,
        "end": 409
    },
    {
        "type": "Number",
        "value": "11",
        "position": 412,
        "end": 413
    },
    {
        "type": "Value",
        "value": "start",
        "position": 416,
        "end": 420
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 422,
        "end": 423
    },
    {
        "type": "Value",
        "value": "times",
        "position": 425,
        "end": 429
    },
    {
        "type": "Number",
        "value": "11",
        "position": 432,
        "end": 433
    },
    {
        "type": "Value",
        "value": "end",
        "position": 436,
        "end": 438
    },
    {
        "type": "Value",
        "value": "last",
        "position": 442,
        "end": 445
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 447,
        "end": 455
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 456
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 462,
        "end": 467
    },
    {
        "type": "Value",
        "value": "period",
        "position": 472,
        "end": 477
    },
    {
        "type": "Number",
        "value": "12",
        "position": 479,
        "end": 480
    },
    {
        "type": "Value",
        "value": "times",
        "position": 483,
        "end": 487
    },
    {
        "type": "Number",
        "value": "12",
        "position": 490,
        "end": 491
    },
    {
        "type": "Value",
        "value": "start",
        "position": 494,
        "end": 498
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 500,
        "end": 501
    },
    {
        "type": "Value",
        "value": "times",
        "position": 503,
        "end": 507
    },
    {
        "type": "Number",
        "value": "12",
        "position": 510,
        "end": 511
    },
    {
        "type": "Value",
        "value": "end",
        "position": 514,
        "end": 516
    },
    {
        "type": "Value",
        "value": "after",
        "position": 520,
        "end": 524
    },
    {
        "type": "Value",
        "value": "last",
        "position": 526,
        "end": 529
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 531,
        "end": 539
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 540
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 546,
        "end": 551
    },
    {
        "type": "Value",
        "value": "period",
        "position": 556,
        "end": 561
    },
    {
        "type": "Number",
        "value": "13",
        "position": 563,
        "end": 564
    },
    {
        "type": "Value",
        "value": "times",
        "position": 567,
        "end": 571
    },
    {
        "type": "Number",
        "value": "13",
        "position": 574,
        "end": 575
    },
    {
        "type": "Value",
        "value": "start",
        "position": 578,
        "end": 582
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 584,
        "end": 585
    },
    {
        "type": "Value",
        "value": "times",
        "position": 587,
        "end": 591
    },
    {
        "type": "Number",
        "value": "13",
        "position": 594,
        "end": 595
    },
    {
        "type": "Value",
        "value": "end",
        "position": 598,
        "end": 600
    },
    {
        "type": "Value",
        "value": "after",
        "position": 604,
        "end": 608
    },
    {
        "type": "Value",
        "value": "last",
        "position": 610,
        "end": 613
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 615,
        "end": 623
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 624
    },
    {
        "type": "IdentifierInnerParam",
        "value": "section",
        "position": 632,
        "end": 638
    },
    {
        "type": "Value",
        "value": "grade11",
        "position": 640,
        "end": 646
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 647
    },
    {
        "type": "Value",
        "value": "user",
        "position": 653,
        "end": 656
    },
    {
        "type": "Value",
        "value": "grade",
        "position": 658,
        "end": 662
    },
    {
        "type": "Number",
        "value": "11",
        "position": 664,
        "end": 665
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 666
    },
    {
        "type": "Value",
        "value": "remove",
        "position": 673,
        "end": 678
    },
    {
        "type": "Number",
        "value": "2",
        "position": 681,
        "end": 681
    },
    {
        "type": "Number",
        "value": "3",
        "position": 687,
        "end": 687
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 689
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 695,
        "end": 700
    },
    {
        "type": "Number",
        "value": "11",
        "position": 705,
        "end": 706
    },
    {
        "type": "Value",
        "value": "times",
        "position": 709,
        "end": 713
    },
    {
        "type": "Number",
        "value": "11",
        "position": 716,
        "end": 717
    },
    {
        "type": "Value",
        "value": "start",
        "position": 720,
        "end": 724
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 726,
        "end": 727
    },
    {
        "type": "Value",
        "value": "times",
        "position": 729,
        "end": 733
    },
    {
        "type": "Number",
        "value": "11",
        "position": 736,
        "end": 737
    },
    {
        "type": "Value",
        "value": "end",
        "position": 740,
        "end": 742
    },
    {
        "type": "Value",
        "value": "last",
        "position": 746,
        "end": 749
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 751,
        "end": 759
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 760
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 766,
        "end": 771
    },
    {
        "type": "Number",
        "value": "12",
        "position": 776,
        "end": 777
    },
    {
        "type": "Value",
        "value": "times",
        "position": 780,
        "end": 784
    },
    {
        "type": "Number",
        "value": "12",
        "position": 787,
        "end": 788
    },
    {
        "type": "Value",
        "value": "start",
        "position": 791,
        "end": 795
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 797,
        "end": 798
    },
    {
        "type": "Value",
        "value": "times",
        "position": 800,
        "end": 804
    },
    {
        "type": "Number",
        "value": "12",
        "position": 807,
        "end": 808
    },
    {
        "type": "Value",
        "value": "end",
        "position": 811,
        "end": 813
    },
    {
        "type": "Value",
        "value": "after",
        "position": 817,
        "end": 821
    },
    {
        "type": "Value",
        "value": "last",
        "position": 823,
        "end": 826
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 828,
        "end": 836
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 837
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 843,
        "end": 848
    },
    {
        "type": "Number",
        "value": "13",
        "position": 853,
        "end": 854
    },
    {
        "type": "Value",
        "value": "times",
        "position": 857,
        "end": 861
    },
    {
        "type": "Number",
        "value": "13",
        "position": 864,
        "end": 865
    },
    {
        "type": "Value",
        "value": "start",
        "position": 868,
        "end": 872
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 874,
        "end": 875
    },
    {
        "type": "Value",
        "value": "times",
        "position": 877,
        "end": 881
    },
    {
        "type": "Number",
        "value": "13",
        "position": 884,
        "end": 885
    },
    {
        "type": "Value",
        "value": "end",
        "position": 888,
        "end": 890
    },
    {
        "type": "Value",
        "value": "after",
        "position": 894,
        "end": 898
    },
    {
        "type": "Value",
        "value": "last",
        "position": 900,
        "end": 903
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 905,
        "end": 913
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 914
    },
    {
        "type": "Value",
        "value": "force",
        "position": 920,
        "end": 924
    },
    {
        "type": "LunchIdentifier",
        "value": "lunch",
        "position": 926,
        "end": 930
    },
    {
        "type": "Number",
        "value": "3",
        "position": 933,
        "end": 933
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 935
    },
    {
        "type": "LunchParam",
        "value": "schedule",
        "position": 940,
        "end": 947
    },
    {
        "type": "Value",
        "value": "normal",
        "position": 949,
        "end": 954
    },
    {
        "type": "IdentifierInnerParam",
        "value": "description",
        "position": 963,
        "end": 973
    },
    {
        "type": "Value",
        "value": "Normal",
        "position": 976,
        "end": 981
    },
    {
        "type": "Value",
        "value": "Schedule",
        "position": 983,
        "end": 990
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 992
    },
    {
        "type": "IdentifierInnerParam",
        "value": "classes",
        "position": 1000,
        "end": 1006
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1007
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1017,
        "end": 1021
    },
    {
        "type": "ClassParam",
        "value": "arrival",
        "position": 1024,
        "end": 1030
    },
    {
        "type": "TimeNumber",
        "value": "7",
        "position": 1034,
        "end": 1034
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1036,
        "end": 1037
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1039,
        "end": 1040
    },
    {
        "type": "TimeNumber",
        "value": "7",
        "position": 1042,
        "end": 1042
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1044,
        "end": 1045
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1046
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1052,
        "end": 1056
    },
    {
        "type": "ClassParam",
        "value": "period",
        "position": 1059,
        "end": 1064
    },
    {
        "type": "TimeNumber",
        "value": "0",
        "position": 1066,
        "end": 1066
    },
    {
        "type": "Number",
        "value": "6",
        "position": 1069,
        "end": 1069
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1071,
        "end": 1072
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1074,
        "end": 1075
    },
    {
        "type": "TimeNumber",
        "value": "7",
        "position": 1077,
        "end": 1077
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1079,
        "end": 1080
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1081
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1087,
        "end": 1091
    },
    {
        "type": "ClassParam",
        "value": "period",
        "position": 1094,
        "end": 1099
    },
    {
        "type": "TimeNumber",
        "value": "1",
        "position": 1101,
        "end": 1101
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1104,
        "end": 1104
    },
    {
        "type": "Number",
        "value": "35",
        "position": 1106,
        "end": 1107
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1109,
        "end": 1110
    },
    {
        "type": "TimeNumber",
        "value": "8",
        "position": 1112,
        "end": 1112
    },
    {
        "type": "Number",
        "value": "45",
        "position": 1114,
        "end": 1115
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1116
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1122,
        "end": 1126
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1129,
        "end": 1129
    },
    {
        "type": "Number",
        "value": "8",
        "position": 1139,
        "end": 1139
    },
    {
        "type": "Number",
        "value": "50",
        "position": 1141,
        "end": 1142
    },
    {
        "type": "ClassParam",
        "value": "to",
        "position": 1144,
        "end": 1145
    },
    {
        "type": "TimeNumber",
        "value": "9",
        "position": 1147,
        "end": 1147
    },
    {
        "type": "Number",
        "value": "55",
        "position": 1149,
        "end": 1150
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1151
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1157,
        "end": 1161
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1164,
        "end": 1164
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1173,
        "end": 1174
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1176,
        "end": 1177
    },
    {
        "type": "ClassParam",
        "value": "to",
        "position": 1179,
        "end": 1180
    },
    {
        "type": "TimeNumber",
        "value": "11",
        "position": 1182,
        "end": 1183
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1185,
        "end": 1186
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1187
    },
    {
        "type": "IdentifierInnerParam",
        "value": "lunches",
        "position": 1195,
        "end": 1201
    },
    {
        "type": "Value",
        "value": "from",
        "position": 1213,
        "end": 1216
    },
    {
        "type": "Value",
        "value": "period",
        "position": 1219,
        "end": 1224
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1226,
        "end": 1226
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1228
    },
    {
        "type": "Value",
        "value": "passing",
        "position": 1238,
        "end": 1244
    },
    {
        "type": "Number",
        "value": "5",
        "position": 1246,
        "end": 1246
    },
    {
        "type": "Value",
        "value": "minutes",
        "position": 1248,
        "end": 1254
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1255
    },
    {
        "type": "LunchIdentifier",
        "value": "lunch",
        "position": 1267,
        "end": 1271
    },
    {
        "type": "Number",
        "value": "1",
        "position": 1274,
        "end": 1274
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1277,
        "end": 1278
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1280,
        "end": 1281
    },
    {
        "type": "LunchParam",
        "value": "to",
        "position": 1283,
        "end": 1284
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1286,
        "end": 1287
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1289,
        "end": 1290
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1291
    },
    {
        "type": "LunchIdentifier",
        "value": "lunch",
        "position": 1297,
        "end": 1301
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1304,
        "end": 1304
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1307,
        "end": 1308
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1310,
        "end": 1311
    },
    {
        "type": "LunchParam",
        "value": "to",
        "position": 1313,
        "end": 1314
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1316,
        "end": 1317
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1319,
        "end": 1320
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1321
    },
    {
        "type": "LunchIdentifier",
        "value": "lunch",
        "position": 1327,
        "end": 1331
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1334,
        "end": 1334
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1337,
        "end": 1338
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1340,
        "end": 1341
    },
    {
        "type": "LunchParam",
        "value": "to",
        "position": 1343,
        "end": 1344
    },
    {
        "type": "Number",
        "value": "12",
        "position": 1346,
        "end": 1347
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1349,
        "end": 1350
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1351
    },
    {
        "type": "IdentifierInnerParam",
        "value": "overides",
        "position": 1364,
        "end": 1371
    },
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 1377,
        "end": 1383
    },
    {
        "type": "IdentifierName",
        "value": "defaultZero",
        "position": 1386,
        "end": 1396
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1397
    },
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 1407,
        "end": 1413
    },
    {
        "type": "IdentifierName",
        "value": "cambridge",
        "position": 1416,
        "end": 1424
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1428,
        "end": 1429
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1432,
        "end": 1433
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1435,
        "end": 1436
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1438,
        "end": 1439
    },
    {
        "type": "TimeNumber",
        "value": "11",
        "position": 1441,
        "end": 1442
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1444,
        "end": 1445
    },
    {
        "type": "Number",
        "value": "12",
        "position": 1449,
        "end": 1450
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1453,
        "end": 1454
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1456,
        "end": 1457
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1459,
        "end": 1460
    },
    {
        "type": "TimeNumber",
        "value": "11",
        "position": 1462,
        "end": 1463
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1465,
        "end": 1466
    },
    {
        "type": "Number",
        "value": "13",
        "position": 1470,
        "end": 1471
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1474,
        "end": 1475
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1477,
        "end": 1478
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1480,
        "end": 1481
    },
    {
        "type": "TimeNumber",
        "value": "11",
        "position": 1483,
        "end": 1484
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1486,
        "end": 1487
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1489
    },
    {
        "type": "ScheduleIdentifier",
        "value": "schedule",
        "position": 1494,
        "end": 1501
    },
    {
        "type": "IdentifierName",
        "value": "testInherit",
        "position": 1503,
        "end": 1513
    },
    {
        "type": "IdentifierInnerParam",
        "value": "description",
        "position": 1522,
        "end": 1532
    },
    {
        "type": "Value",
        "value": "Test",
        "position": 1535,
        "end": 1538
    },
    {
        "type": "Value",
        "value": "Inherit",
        "position": 1540,
        "end": 1546
    },
    {
        "type": "Value",
        "value": "Schedule",
        "position": 1548,
        "end": 1555
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1557
    },
    {
        "type": "IdentifierInnerParam",
        "value": "inherit",
        "position": 1564,
        "end": 1570
    },
    {
        "type": "Value",
        "value": "normal",
        "position": 1572,
        "end": 1577
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1578
    },
    {
        "type": "TeacherIdentifier",
        "value": "teacher",
        "position": 1583,
        "end": 1589
    },
    {
        "type": "IdentifierName",
        "value": "Rick",
        "position": 1592,
        "end": 1595
    },
    {
        "type": "Value",
        "value": "Astley",
        "position": 1597,
        "end": 1602
    },
    {
        "type": "Value",
        "value": "ABCD",
        "position": 1605,
        "end": 1608
    },
    {
        "type": "Number",
        "value": "1234",
        "position": 1610,
        "end": 1613
    },
    {
        "type": "Value",
        "value": "AB34",
        "position": 1615,
        "end": 1618
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1619
    },
    {
        "type": "EventIdentifier",
        "value": "event",
        "position": 1622,
        "end": 1626
    },
    {
        "type": "EventType",
        "value": "singleday",
        "position": 1629,
        "end": 1637
    },
    {
        "type": "IdentifierInnerParam",
        "value": "date",
        "position": 1647,
        "end": 1650
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1653,
        "end": 1660
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1662,
        "end": 1662
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1665,
        "end": 1668
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1670
    },
    {
        "type": "IdentifierInnerParam",
        "value": "schedule",
        "position": 1677,
        "end": 1684
    },
    {
        "type": "Value",
        "value": "advisory",
        "position": 1686,
        "end": 1693
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1694
    },
    {
        "type": "IdentifierInnerParam",
        "value": "message",
        "position": 1701,
        "end": 1707
    },
    {
        "type": "Value",
        "value": "Advisory",
        "position": 1710,
        "end": 1717
    },
    {
        "type": "Value",
        "value": "Day",
        "position": 1719,
        "end": 1721
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1723
    },
    {
        "type": "EventIdentifier",
        "value": "event",
        "position": 1728,
        "end": 1732
    },
    {
        "type": "EventType",
        "value": "multiday",
        "position": 1735,
        "end": 1742
    },
    {
        "type": "Value",
        "value": "messageonly",
        "position": 1745,
        "end": 1755
    },
    {
        "type": "IdentifierInnerParam",
        "value": "date",
        "position": 1765,
        "end": 1768
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1771,
        "end": 1778
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1780,
        "end": 1780
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1783,
        "end": 1786
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1789,
        "end": 1790
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1793,
        "end": 1800
    },
    {
        "type": "Number",
        "value": "5",
        "position": 1802,
        "end": 1802
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1805,
        "end": 1808
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1810
    },
    {
        "type": "IdentifierInnerParam",
        "value": "message",
        "position": 1817,
        "end": 1823
    },
    {
        "type": "Value",
        "value": "Yall",
        "position": 1826,
        "end": 1829
    },
    {
        "type": "Value",
        "value": "Silly",
        "position": 1831,
        "end": 1835
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1837
    },
    {
        "type": "EventIdentifier",
        "value": "event",
        "position": 1842,
        "end": 1846
    },
    {
        "type": "EventType",
        "value": "reoccuring",
        "position": 1849,
        "end": 1858
    },
    {
        "type": "IdentifierInnerParam",
        "value": "schedule",
        "position": 1868,
        "end": 1875
    },
    {
        "type": "Value",
        "value": "lateStart",
        "position": 1877,
        "end": 1885
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1886
    },
    {
        "type": "IdentifierInnerParam",
        "value": "message",
        "position": 1893,
        "end": 1899
    },
    {
        "type": "Value",
        "value": "Late",
        "position": 1902,
        "end": 1905
    },
    {
        "type": "Value",
        "value": "Start",
        "position": 1907,
        "end": 1911
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1913
    },
    {
        "type": "IdentifierInnerParam",
        "value": "occurs",
        "position": 1920,
        "end": 1925
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1926
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1932,
        "end": 1935
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1938,
        "end": 1945
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1947,
        "end": 1947
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1950,
        "end": 1953
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1955
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1961,
        "end": 1964
    },
    {
        "type": "Value",
        "value": "november",
        "position": 1967,
        "end": 1974
    },
    {
        "type": "Number",
        "value": "9",
        "position": 1976,
        "end": 1976
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1979,
        "end": 1982
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1984
    },
    {
        "type": "EventIdentifier",
        "value": "event",
        "position": 1989,
        "end": 1993
    },
    {
        "type": "EventType",
        "value": "eventrange",
        "position": 1996,
        "end": 2005
    },
    {
        "type": "IdentifierInnerParam",
        "value": "info",
        "position": 2015,
        "end": 2018
    },
    {
        "type": "Value",
        "value": "Assemblies",
        "position": 2021,
        "end": 2030
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2032
    },
    {
        "type": "IdentifierInnerParam",
        "value": "date",
        "position": 2039,
        "end": 2042
    },
    {
        "type": "Value",
        "value": "November",
        "position": 2045,
        "end": 2052
    },
    {
        "type": "Number",
        "value": "3",
        "position": 2054,
        "end": 2054
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 2057,
        "end": 2060
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 2063,
        "end": 2064
    },
    {
        "type": "Value",
        "value": "November",
        "position": 2067,
        "end": 2074
    },
    {
        "type": "Number",
        "value": "5",
        "position": 2076,
        "end": 2076
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 2079,
        "end": 2082
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2084
    },
    {
        "type": "IdentifierInnerParam",
        "value": "events",
        "position": 2091,
        "end": 2096
    },
    {
        "type": "Value",
        "value": "messageonly",
        "position": 2099,
        "end": 2109
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2111
    },
    {
        "type": "Value",
        "value": "day",
        "position": 2117,
        "end": 2119
    },
    {
        "type": "Number",
        "value": "1",
        "position": 2122,
        "end": 2122
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2126,
        "end": 2134
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2136,
        "end": 2142
    },
    {
        "type": "Number",
        "value": "1",
        "position": 2144,
        "end": 2144
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2146
    },
    {
        "type": "Value",
        "value": "day",
        "position": 2152,
        "end": 2154
    },
    {
        "type": "Number",
        "value": "2",
        "position": 2157,
        "end": 2157
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2161,
        "end": 2169
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2171,
        "end": 2177
    },
    {
        "type": "Number",
        "value": "2",
        "position": 2179,
        "end": 2179
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2181
    },
    {
        "type": "Value",
        "value": "day",
        "position": 2187,
        "end": 2189
    },
    {
        "type": "Number",
        "value": "3",
        "position": 2192,
        "end": 2192
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2196,
        "end": 2204
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2206,
        "end": 2212
    },
    {
        "type": "Number",
        "value": "3",
        "position": 2214,
        "end": 2214
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2216
    }
]