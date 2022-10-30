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
        "position": 10,
        "end": 20
    },
    {
        "type": "Value",
        "value": "user",
        "position": 29,
        "end": 32
    },
    {
        "type": "Value",
        "value": "classes",
        "position": 34,
        "end": 40
    },
    {
        "type": "Value",
        "value": "contains",
        "position": 42,
        "end": 49
    },
    {
        "type": "Value",
        "value": "period",
        "position": 51,
        "end": 56
    },
    {
        "type": "Number",
        "value": "0",
        "position": 58,
        "end": 58
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 59
    },
    {
        "type": "ScheduleIdentifier",
        "value": "schedule",
        "position": 65,
        "end": 72
    },
    {
        "type": "IdentifierName",
        "value": "classes",
        "position": 74,
        "end": 80
    },
    {
        "type": "Value",
        "value": "contains",
        "position": 82,
        "end": 89
    },
    {
        "type": "Value",
        "value": "arrival",
        "position": 92,
        "end": 98
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 100
    },
    {
        "type": "Value",
        "value": "replace",
        "position": 107,
        "end": 113
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 115,
        "end": 119
    },
    {
        "type": "ClassParam",
        "value": "arrival",
        "position": 122,
        "end": 128
    },
    {
        "type": "Value",
        "value": "with",
        "position": 131,
        "end": 134
    },
    {
        "type": "Value",
        "value": "period",
        "position": 139,
        "end": 144
    },
    {
        "type": "Number",
        "value": "0",
        "position": 146,
        "end": 146
    },
    {
        "type": "Number",
        "value": "6",
        "position": 149,
        "end": 149
    },
    {
        "type": "Number",
        "value": "30",
        "position": 151,
        "end": 152
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 154,
        "end": 155
    },
    {
        "type": "TimeNumber",
        "value": "7",
        "position": 157,
        "end": 157
    },
    {
        "type": "Number",
        "value": "30",
        "position": 159,
        "end": 160
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 163
    },
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 168,
        "end": 174
    },
    {
        "type": "IdentifierName",
        "value": "cambridge",
        "position": 177,
        "end": 185
    },
    {
        "type": "Value",
        "value": "options",
        "position": 205,
        "end": 211
    },
    {
        "type": "Value",
        "value": "times",
        "position": 214,
        "end": 218
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 220
    },
    {
        "type": "Value",
        "value": "user",
        "position": 241,
        "end": 244
    },
    {
        "type": "Value",
        "value": "classes",
        "position": 246,
        "end": 252
    },
    {
        "type": "Value",
        "value": "contains",
        "position": 254,
        "end": 261
    },
    {
        "type": "Value",
        "value": "periods",
        "position": 263,
        "end": 269
    },
    {
        "type": "Number",
        "value": "11",
        "position": 271,
        "end": 272
    },
    {
        "type": "Number",
        "value": "12",
        "position": 275,
        "end": 276
    },
    {
        "type": "Number",
        "value": "13",
        "position": 279,
        "end": 280
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 281
    },
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 307,
        "end": 313
    },
    {
        "type": "IdentifierName",
        "value": "grade10",
        "position": 315,
        "end": 321
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 322
    },
    {
        "type": "Value",
        "value": "user",
        "position": 328,
        "end": 331
    },
    {
        "type": "Value",
        "value": "grade",
        "position": 333,
        "end": 337
    },
    {
        "type": "Number",
        "value": "10",
        "position": 339,
        "end": 340
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 341
    },
    {
        "type": "Value",
        "value": "remove",
        "position": 352,
        "end": 357
    },
    {
        "type": "Value",
        "value": "period",
        "position": 360,
        "end": 365
    },
    {
        "type": "Number",
        "value": "1",
        "position": 367,
        "end": 367
    },
    {
        "type": "Value",
        "value": "period",
        "position": 373,
        "end": 378
    },
    {
        "type": "Number",
        "value": "2",
        "position": 380,
        "end": 380
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 382
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 388,
        "end": 393
    },
    {
        "type": "Value",
        "value": "period",
        "position": 398,
        "end": 403
    },
    {
        "type": "Number",
        "value": "11",
        "position": 405,
        "end": 406
    },
    {
        "type": "Value",
        "value": "times",
        "position": 409,
        "end": 413
    },
    {
        "type": "Number",
        "value": "11",
        "position": 416,
        "end": 417
    },
    {
        "type": "Value",
        "value": "start",
        "position": 420,
        "end": 424
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 426,
        "end": 427
    },
    {
        "type": "Value",
        "value": "times",
        "position": 429,
        "end": 433
    },
    {
        "type": "Number",
        "value": "11",
        "position": 436,
        "end": 437
    },
    {
        "type": "Value",
        "value": "end",
        "position": 440,
        "end": 442
    },
    {
        "type": "Value",
        "value": "last",
        "position": 446,
        "end": 449
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 451,
        "end": 459
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 460
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 466,
        "end": 471
    },
    {
        "type": "Value",
        "value": "period",
        "position": 476,
        "end": 481
    },
    {
        "type": "Number",
        "value": "12",
        "position": 483,
        "end": 484
    },
    {
        "type": "Value",
        "value": "times",
        "position": 487,
        "end": 491
    },
    {
        "type": "Number",
        "value": "12",
        "position": 494,
        "end": 495
    },
    {
        "type": "Value",
        "value": "start",
        "position": 498,
        "end": 502
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 504,
        "end": 505
    },
    {
        "type": "Value",
        "value": "times",
        "position": 507,
        "end": 511
    },
    {
        "type": "Number",
        "value": "12",
        "position": 514,
        "end": 515
    },
    {
        "type": "Value",
        "value": "end",
        "position": 518,
        "end": 520
    },
    {
        "type": "Value",
        "value": "after",
        "position": 524,
        "end": 528
    },
    {
        "type": "Value",
        "value": "last",
        "position": 530,
        "end": 533
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 535,
        "end": 543
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 544
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 550,
        "end": 555
    },
    {
        "type": "Value",
        "value": "period",
        "position": 560,
        "end": 565
    },
    {
        "type": "Number",
        "value": "13",
        "position": 567,
        "end": 568
    },
    {
        "type": "Value",
        "value": "times",
        "position": 571,
        "end": 575
    },
    {
        "type": "Number",
        "value": "13",
        "position": 578,
        "end": 579
    },
    {
        "type": "Value",
        "value": "start",
        "position": 582,
        "end": 586
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 588,
        "end": 589
    },
    {
        "type": "Value",
        "value": "times",
        "position": 591,
        "end": 595
    },
    {
        "type": "Number",
        "value": "13",
        "position": 598,
        "end": 599
    },
    {
        "type": "Value",
        "value": "end",
        "position": 602,
        "end": 604
    },
    {
        "type": "Value",
        "value": "after",
        "position": 608,
        "end": 612
    },
    {
        "type": "Value",
        "value": "last",
        "position": 614,
        "end": 617
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 619,
        "end": 627
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 628
    },
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 636,
        "end": 642
    },
    {
        "type": "IdentifierName",
        "value": "grade11",
        "position": 644,
        "end": 650
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 651
    },
    {
        "type": "Value",
        "value": "user",
        "position": 657,
        "end": 660
    },
    {
        "type": "Value",
        "value": "grade",
        "position": 662,
        "end": 666
    },
    {
        "type": "Number",
        "value": "11",
        "position": 668,
        "end": 669
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 670
    },
    {
        "type": "Value",
        "value": "remove",
        "position": 677,
        "end": 682
    },
    {
        "type": "Number",
        "value": "2",
        "position": 685,
        "end": 685
    },
    {
        "type": "Number",
        "value": "3",
        "position": 691,
        "end": 691
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 693
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 699,
        "end": 704
    },
    {
        "type": "Number",
        "value": "11",
        "position": 709,
        "end": 710
    },
    {
        "type": "Value",
        "value": "times",
        "position": 713,
        "end": 717
    },
    {
        "type": "Number",
        "value": "11",
        "position": 720,
        "end": 721
    },
    {
        "type": "Value",
        "value": "start",
        "position": 724,
        "end": 728
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 730,
        "end": 731
    },
    {
        "type": "Value",
        "value": "times",
        "position": 733,
        "end": 737
    },
    {
        "type": "Number",
        "value": "11",
        "position": 740,
        "end": 741
    },
    {
        "type": "Value",
        "value": "end",
        "position": 744,
        "end": 746
    },
    {
        "type": "Value",
        "value": "last",
        "position": 750,
        "end": 753
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 755,
        "end": 763
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 764
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 770,
        "end": 775
    },
    {
        "type": "Number",
        "value": "12",
        "position": 780,
        "end": 781
    },
    {
        "type": "Value",
        "value": "times",
        "position": 784,
        "end": 788
    },
    {
        "type": "Number",
        "value": "12",
        "position": 791,
        "end": 792
    },
    {
        "type": "Value",
        "value": "start",
        "position": 795,
        "end": 799
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 801,
        "end": 802
    },
    {
        "type": "Value",
        "value": "times",
        "position": 804,
        "end": 808
    },
    {
        "type": "Number",
        "value": "12",
        "position": 811,
        "end": 812
    },
    {
        "type": "Value",
        "value": "end",
        "position": 815,
        "end": 817
    },
    {
        "type": "Value",
        "value": "after",
        "position": 821,
        "end": 825
    },
    {
        "type": "Value",
        "value": "last",
        "position": 827,
        "end": 830
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 832,
        "end": 840
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 841
    },
    {
        "type": "Value",
        "value": "insert",
        "position": 847,
        "end": 852
    },
    {
        "type": "Number",
        "value": "13",
        "position": 857,
        "end": 858
    },
    {
        "type": "Value",
        "value": "times",
        "position": 861,
        "end": 865
    },
    {
        "type": "Number",
        "value": "13",
        "position": 868,
        "end": 869
    },
    {
        "type": "Value",
        "value": "start",
        "position": 872,
        "end": 876
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 878,
        "end": 879
    },
    {
        "type": "Value",
        "value": "times",
        "position": 881,
        "end": 885
    },
    {
        "type": "Number",
        "value": "13",
        "position": 888,
        "end": 889
    },
    {
        "type": "Value",
        "value": "end",
        "position": 892,
        "end": 894
    },
    {
        "type": "Value",
        "value": "after",
        "position": 898,
        "end": 902
    },
    {
        "type": "Value",
        "value": "last",
        "position": 904,
        "end": 907
    },
    {
        "type": "Value",
        "value": "operation",
        "position": 909,
        "end": 917
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 918
    },
    {
        "type": "Value",
        "value": "force",
        "position": 924,
        "end": 928
    },
    {
        "type": "LunchIdentifier",
        "value": "lunch",
        "position": 930,
        "end": 934
    },
    {
        "type": "Number",
        "value": "3",
        "position": 937,
        "end": 937
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 939
    },
    {
        "type": "LunchParam",
        "value": "schedule",
        "position": 944,
        "end": 951
    },
    {
        "type": "Value",
        "value": "normal",
        "position": 954,
        "end": 959
    },
    {
        "type": "Value",
        "value": "description",
        "position": 969,
        "end": 979
    },
    {
        "type": "Value",
        "value": "Normal",
        "position": 982,
        "end": 987
    },
    {
        "type": "Value",
        "value": "Schedule",
        "position": 989,
        "end": 996
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 998
    },
    {
        "type": "Value",
        "value": "classes",
        "position": 1006,
        "end": 1012
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1013
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1023,
        "end": 1027
    },
    {
        "type": "ClassParam",
        "value": "arrival",
        "position": 1030,
        "end": 1036
    },
    {
        "type": "TimeNumber",
        "value": "7",
        "position": 1040,
        "end": 1040
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1042,
        "end": 1043
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1045,
        "end": 1046
    },
    {
        "type": "TimeNumber",
        "value": "7",
        "position": 1048,
        "end": 1048
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1050,
        "end": 1051
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1052
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1058,
        "end": 1062
    },
    {
        "type": "ClassParam",
        "value": "period",
        "position": 1065,
        "end": 1070
    },
    {
        "type": "TimeNumber",
        "value": "0",
        "position": 1072,
        "end": 1072
    },
    {
        "type": "Number",
        "value": "6",
        "position": 1075,
        "end": 1075
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1077,
        "end": 1078
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1080,
        "end": 1081
    },
    {
        "type": "TimeNumber",
        "value": "7",
        "position": 1083,
        "end": 1083
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1085,
        "end": 1086
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1087
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1093,
        "end": 1097
    },
    {
        "type": "ClassParam",
        "value": "period",
        "position": 1100,
        "end": 1105
    },
    {
        "type": "TimeNumber",
        "value": "1",
        "position": 1107,
        "end": 1107
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1110,
        "end": 1110
    },
    {
        "type": "Number",
        "value": "35",
        "position": 1112,
        "end": 1113
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1115,
        "end": 1116
    },
    {
        "type": "TimeNumber",
        "value": "8",
        "position": 1118,
        "end": 1118
    },
    {
        "type": "Number",
        "value": "45",
        "position": 1120,
        "end": 1121
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1122
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1128,
        "end": 1132
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1135,
        "end": 1135
    },
    {
        "type": "Number",
        "value": "8",
        "position": 1145,
        "end": 1145
    },
    {
        "type": "Number",
        "value": "50",
        "position": 1147,
        "end": 1148
    },
    {
        "type": "ClassParam",
        "value": "to",
        "position": 1150,
        "end": 1151
    },
    {
        "type": "TimeNumber",
        "value": "9",
        "position": 1153,
        "end": 1153
    },
    {
        "type": "Number",
        "value": "55",
        "position": 1155,
        "end": 1156
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1157
    },
    {
        "type": "ClassIdentifier",
        "value": "class",
        "position": 1163,
        "end": 1167
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1170,
        "end": 1170
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1179,
        "end": 1180
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1182,
        "end": 1183
    },
    {
        "type": "ClassParam",
        "value": "to",
        "position": 1185,
        "end": 1186
    },
    {
        "type": "TimeNumber",
        "value": "11",
        "position": 1188,
        "end": 1189
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1191,
        "end": 1192
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1193
    },
    {
        "type": "Value",
        "value": "lunches",
        "position": 1201,
        "end": 1207
    },
    {
        "type": "Value",
        "value": "from",
        "position": 1219,
        "end": 1222
    },
    {
        "type": "Value",
        "value": "period",
        "position": 1225,
        "end": 1230
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1232,
        "end": 1232
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1234
    },
    {
        "type": "Value",
        "value": "passing",
        "position": 1244,
        "end": 1250
    },
    {
        "type": "Number",
        "value": "5",
        "position": 1252,
        "end": 1252
    },
    {
        "type": "Value",
        "value": "minutes",
        "position": 1254,
        "end": 1260
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1261
    },
    {
        "type": "LunchIdentifier",
        "value": "lunch",
        "position": 1273,
        "end": 1277
    },
    {
        "type": "Number",
        "value": "1",
        "position": 1280,
        "end": 1280
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1283,
        "end": 1284
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1286,
        "end": 1287
    },
    {
        "type": "LunchParam",
        "value": "to",
        "position": 1289,
        "end": 1290
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1292,
        "end": 1293
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1295,
        "end": 1296
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1297
    },
    {
        "type": "LunchIdentifier",
        "value": "lunch",
        "position": 1303,
        "end": 1307
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1310,
        "end": 1310
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1313,
        "end": 1314
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1316,
        "end": 1317
    },
    {
        "type": "LunchParam",
        "value": "to",
        "position": 1319,
        "end": 1320
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1322,
        "end": 1323
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1325,
        "end": 1326
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1327
    },
    {
        "type": "LunchIdentifier",
        "value": "lunch",
        "position": 1333,
        "end": 1337
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1340,
        "end": 1340
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1343,
        "end": 1344
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1346,
        "end": 1347
    },
    {
        "type": "LunchParam",
        "value": "to",
        "position": 1349,
        "end": 1350
    },
    {
        "type": "Number",
        "value": "12",
        "position": 1352,
        "end": 1353
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1355,
        "end": 1356
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1357
    },
    {
        "type": "Value",
        "value": "overides",
        "position": 1370,
        "end": 1377
    },
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 1383,
        "end": 1389
    },
    {
        "type": "IdentifierName",
        "value": "defaultZero",
        "position": 1392,
        "end": 1402
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1403
    },
    {
        "type": "OverideIdentifier",
        "value": "overide",
        "position": 1413,
        "end": 1419
    },
    {
        "type": "IdentifierName",
        "value": "cambridge",
        "position": 1422,
        "end": 1430
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1434,
        "end": 1435
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1438,
        "end": 1439
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1441,
        "end": 1442
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1444,
        "end": 1445
    },
    {
        "type": "TimeNumber",
        "value": "11",
        "position": 1447,
        "end": 1448
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1450,
        "end": 1451
    },
    {
        "type": "Number",
        "value": "12",
        "position": 1455,
        "end": 1456
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1459,
        "end": 1460
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1462,
        "end": 1463
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1465,
        "end": 1466
    },
    {
        "type": "TimeNumber",
        "value": "11",
        "position": 1468,
        "end": 1469
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1471,
        "end": 1472
    },
    {
        "type": "Number",
        "value": "13",
        "position": 1476,
        "end": 1477
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1480,
        "end": 1481
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1483,
        "end": 1484
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1486,
        "end": 1487
    },
    {
        "type": "TimeNumber",
        "value": "11",
        "position": 1489,
        "end": 1490
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1492,
        "end": 1493
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1495
    },
    {
        "type": "TeacherIdentifier",
        "value": "teacher",
        "position": 1500,
        "end": 1506
    },
    {
        "type": "IdentifierName",
        "value": "Rick",
        "position": 1509,
        "end": 1512
    },
    {
        "type": "Value",
        "value": "Astley",
        "position": 1514,
        "end": 1519
    },
    {
        "type": "Value",
        "value": "ABCD",
        "position": 1522,
        "end": 1525
    },
    {
        "type": "Number",
        "value": "1234",
        "position": 1527,
        "end": 1530
    },
    {
        "type": "Value",
        "value": "AB34",
        "position": 1532,
        "end": 1535
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1536
    },
    {
        "type": "EventIdentifier",
        "value": "event",
        "position": 1539,
        "end": 1543
    },
    {
        "type": "EventType",
        "value": "singleday",
        "position": 1546,
        "end": 1554
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1564,
        "end": 1567
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1570,
        "end": 1577
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1579,
        "end": 1579
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1582,
        "end": 1585
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1587
    },
    {
        "type": "ScheduleIdentifier",
        "value": "schedule",
        "position": 1594,
        "end": 1601
    },
    {
        "type": "IdentifierName",
        "value": "advisory",
        "position": 1603,
        "end": 1610
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1611
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1618,
        "end": 1624
    },
    {
        "type": "Value",
        "value": "Advisory",
        "position": 1627,
        "end": 1634
    },
    {
        "type": "Value",
        "value": "Day",
        "position": 1636,
        "end": 1638
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1640
    },
    {
        "type": "EventIdentifier",
        "value": "event",
        "position": 1645,
        "end": 1649
    },
    {
        "type": "EventType",
        "value": "multiday",
        "position": 1652,
        "end": 1659
    },
    {
        "type": "Value",
        "value": "messageonly",
        "position": 1662,
        "end": 1672
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1682,
        "end": 1685
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1688,
        "end": 1695
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1697,
        "end": 1697
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1700,
        "end": 1703
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1706,
        "end": 1707
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1710,
        "end": 1717
    },
    {
        "type": "Number",
        "value": "5",
        "position": 1719,
        "end": 1719
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1722,
        "end": 1725
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1727
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1734,
        "end": 1740
    },
    {
        "type": "Value",
        "value": "Yall",
        "position": 1743,
        "end": 1746
    },
    {
        "type": "Value",
        "value": "Silly",
        "position": 1748,
        "end": 1752
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1754
    },
    {
        "type": "EventIdentifier",
        "value": "event",
        "position": 1759,
        "end": 1763
    },
    {
        "type": "EventType",
        "value": "reoccuring",
        "position": 1766,
        "end": 1775
    },
    {
        "type": "ScheduleIdentifier",
        "value": "schedule",
        "position": 1785,
        "end": 1792
    },
    {
        "type": "IdentifierName",
        "value": "lateStart",
        "position": 1794,
        "end": 1802
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1803
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1810,
        "end": 1816
    },
    {
        "type": "Value",
        "value": "Late",
        "position": 1819,
        "end": 1822
    },
    {
        "type": "Value",
        "value": "Start",
        "position": 1824,
        "end": 1828
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1830
    },
    {
        "type": "Value",
        "value": "occurs",
        "position": 1837,
        "end": 1842
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1843
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1849,
        "end": 1852
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1855,
        "end": 1862
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1864,
        "end": 1864
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1867,
        "end": 1870
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1872
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1878,
        "end": 1881
    },
    {
        "type": "Value",
        "value": "november",
        "position": 1884,
        "end": 1891
    },
    {
        "type": "Number",
        "value": "9",
        "position": 1893,
        "end": 1893
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1896,
        "end": 1899
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1901
    },
    {
        "type": "EventIdentifier",
        "value": "event",
        "position": 1906,
        "end": 1910
    },
    {
        "type": "EventType",
        "value": "eventrange",
        "position": 1913,
        "end": 1922
    },
    {
        "type": "Value",
        "value": "info",
        "position": 1932,
        "end": 1935
    },
    {
        "type": "Value",
        "value": "Assemblies",
        "position": 1938,
        "end": 1947
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1949
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1956,
        "end": 1959
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1962,
        "end": 1969
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1971,
        "end": 1971
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1974,
        "end": 1977
    },
    {
        "type": "RangeIdentifier",
        "value": "to",
        "position": 1980,
        "end": 1981
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1984,
        "end": 1991
    },
    {
        "type": "Number",
        "value": "5",
        "position": 1993,
        "end": 1993
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1996,
        "end": 1999
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2001
    },
    {
        "type": "Value",
        "value": "events",
        "position": 2008,
        "end": 2013
    },
    {
        "type": "Value",
        "value": "messageonly",
        "position": 2016,
        "end": 2026
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2028
    },
    {
        "type": "Value",
        "value": "day",
        "position": 2034,
        "end": 2036
    },
    {
        "type": "Number",
        "value": "1",
        "position": 2039,
        "end": 2039
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2043,
        "end": 2051
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2053,
        "end": 2059
    },
    {
        "type": "Number",
        "value": "1",
        "position": 2061,
        "end": 2061
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2063
    },
    {
        "type": "Value",
        "value": "day",
        "position": 2069,
        "end": 2071
    },
    {
        "type": "Number",
        "value": "2",
        "position": 2074,
        "end": 2074
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2078,
        "end": 2086
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2088,
        "end": 2094
    },
    {
        "type": "Number",
        "value": "2",
        "position": 2096,
        "end": 2096
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2098
    },
    {
        "type": "Value",
        "value": "day",
        "position": 2104,
        "end": 2106
    },
    {
        "type": "Number",
        "value": "3",
        "position": 2109,
        "end": 2109
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2113,
        "end": 2121
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2123,
        "end": 2129
    },
    {
        "type": "Number",
        "value": "3",
        "position": 2131,
        "end": 2131
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2133
    }
]