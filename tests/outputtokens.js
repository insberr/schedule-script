const tokens = [
    {
        "type": "Value",
        "value": "overide",
        "position": 1,
        "end": 7
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 9
    },
    {
        "type": "Value",
        "value": "defaultZero",
        "position": 10,
        "end": 20
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 21
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 23
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
        "type": "Value",
        "value": "schedule",
        "position": 65,
        "end": 72
    },
    {
        "type": "Value",
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
        "type": "LeftBracket",
        "value": "[",
        "position": 91
    },
    {
        "type": "Value",
        "value": "arrival",
        "position": 92,
        "end": 98
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 99
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
        "type": "Value",
        "value": "class",
        "position": 115,
        "end": 119
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 121
    },
    {
        "type": "Value",
        "value": "arrival",
        "position": 122,
        "end": 128
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 129
    },
    {
        "type": "Value",
        "value": "with",
        "position": 131,
        "end": 134
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 136
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 138
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
        "type": "RightBracket",
        "value": "]",
        "position": 147
    },
    {
        "type": "Number",
        "value": "6",
        "position": 149,
        "end": 149
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 150
    },
    {
        "type": "Number",
        "value": "30",
        "position": 151,
        "end": 152
    },
    {
        "type": "Value",
        "value": "to",
        "position": 154,
        "end": 155
    },
    {
        "type": "Number",
        "value": "7",
        "position": 157,
        "end": 157
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 158
    },
    {
        "type": "Number",
        "value": "30",
        "position": 159,
        "end": 160
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 162
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 163
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 165
    },
    {
        "type": "Value",
        "value": "overide",
        "position": 168,
        "end": 174
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 176
    },
    {
        "type": "Value",
        "value": "cambridge",
        "position": 177,
        "end": 185
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 186
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 188
    },
    {
        "type": "At",
        "value": "@",
        "position": 204
    },
    {
        "type": "Value",
        "value": "options",
        "position": 205,
        "end": 211
    },
    {
        "type": "Unknown",
        "value": "(",
        "position": 213
    },
    {
        "type": "Value",
        "value": "times",
        "position": 214,
        "end": 218
    },
    {
        "type": "Unknown",
        "value": ")",
        "position": 219
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
        "type": "Comma",
        "value": ",",
        "position": 273
    },
    {
        "type": "Number",
        "value": "12",
        "position": 275,
        "end": 276
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 277
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
        "type": "At",
        "value": "@",
        "position": 306
    },
    {
        "type": "Value",
        "value": "overide",
        "position": 307,
        "end": 313
    },
    {
        "type": "Value",
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
        "type": "LeftBracket",
        "value": "[",
        "position": 359
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
        "type": "RightBracket",
        "value": "]",
        "position": 368
    },
    {
        "type": "Unknown",
        "value": "&",
        "position": 370
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 372
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
        "type": "RightBracket",
        "value": "]",
        "position": 381
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
        "type": "LeftCurly",
        "value": "{",
        "position": 395
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 397
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
        "type": "RightBracket",
        "value": "]",
        "position": 407
    },
    {
        "type": "Value",
        "value": "times",
        "position": 409,
        "end": 413
    },
    {
        "type": "Point",
        "value": ".",
        "position": 414
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 415
    },
    {
        "type": "Number",
        "value": "11",
        "position": 416,
        "end": 417
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 418
    },
    {
        "type": "Point",
        "value": ".",
        "position": 419
    },
    {
        "type": "Value",
        "value": "start",
        "position": 420,
        "end": 424
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 434
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 435
    },
    {
        "type": "Number",
        "value": "11",
        "position": 436,
        "end": 437
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 438
    },
    {
        "type": "Point",
        "value": ".",
        "position": 439
    },
    {
        "type": "Value",
        "value": "end",
        "position": 440,
        "end": 442
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 444
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
        "type": "LeftCurly",
        "value": "{",
        "position": 473
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 475
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
        "type": "RightBracket",
        "value": "]",
        "position": 485
    },
    {
        "type": "Value",
        "value": "times",
        "position": 487,
        "end": 491
    },
    {
        "type": "Point",
        "value": ".",
        "position": 492
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 493
    },
    {
        "type": "Number",
        "value": "12",
        "position": 494,
        "end": 495
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 496
    },
    {
        "type": "Point",
        "value": ".",
        "position": 497
    },
    {
        "type": "Value",
        "value": "start",
        "position": 498,
        "end": 502
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 512
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 513
    },
    {
        "type": "Number",
        "value": "12",
        "position": 514,
        "end": 515
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 516
    },
    {
        "type": "Point",
        "value": ".",
        "position": 517
    },
    {
        "type": "Value",
        "value": "end",
        "position": 518,
        "end": 520
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 522
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
        "type": "LeftCurly",
        "value": "{",
        "position": 557
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 559
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
        "type": "RightBracket",
        "value": "]",
        "position": 569
    },
    {
        "type": "Value",
        "value": "times",
        "position": 571,
        "end": 575
    },
    {
        "type": "Point",
        "value": ".",
        "position": 576
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 577
    },
    {
        "type": "Number",
        "value": "13",
        "position": 578,
        "end": 579
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 580
    },
    {
        "type": "Point",
        "value": ".",
        "position": 581
    },
    {
        "type": "Value",
        "value": "start",
        "position": 582,
        "end": 586
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 596
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 597
    },
    {
        "type": "Number",
        "value": "13",
        "position": 598,
        "end": 599
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 600
    },
    {
        "type": "Point",
        "value": ".",
        "position": 601
    },
    {
        "type": "Value",
        "value": "end",
        "position": 602,
        "end": 604
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 606
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
        "type": "At",
        "value": "@",
        "position": 635
    },
    {
        "type": "Value",
        "value": "overide",
        "position": 636,
        "end": 642
    },
    {
        "type": "Value",
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
        "type": "LeftBracket",
        "value": "[",
        "position": 684
    },
    {
        "type": "Number",
        "value": "2",
        "position": 685,
        "end": 685
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 686
    },
    {
        "type": "Unknown",
        "value": "&",
        "position": 688
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 690
    },
    {
        "type": "Number",
        "value": "3",
        "position": 691,
        "end": 691
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 692
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
        "type": "LeftCurly",
        "value": "{",
        "position": 706
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 708
    },
    {
        "type": "Number",
        "value": "11",
        "position": 709,
        "end": 710
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 711
    },
    {
        "type": "Value",
        "value": "times",
        "position": 713,
        "end": 717
    },
    {
        "type": "Point",
        "value": ".",
        "position": 718
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 719
    },
    {
        "type": "Number",
        "value": "11",
        "position": 720,
        "end": 721
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 722
    },
    {
        "type": "Point",
        "value": ".",
        "position": 723
    },
    {
        "type": "Value",
        "value": "start",
        "position": 724,
        "end": 728
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 738
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 739
    },
    {
        "type": "Number",
        "value": "11",
        "position": 740,
        "end": 741
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 742
    },
    {
        "type": "Point",
        "value": ".",
        "position": 743
    },
    {
        "type": "Value",
        "value": "end",
        "position": 744,
        "end": 746
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 748
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
        "type": "LeftCurly",
        "value": "{",
        "position": 777
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 779
    },
    {
        "type": "Number",
        "value": "12",
        "position": 780,
        "end": 781
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 782
    },
    {
        "type": "Value",
        "value": "times",
        "position": 784,
        "end": 788
    },
    {
        "type": "Point",
        "value": ".",
        "position": 789
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 790
    },
    {
        "type": "Number",
        "value": "12",
        "position": 791,
        "end": 792
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 793
    },
    {
        "type": "Point",
        "value": ".",
        "position": 794
    },
    {
        "type": "Value",
        "value": "start",
        "position": 795,
        "end": 799
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 809
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 810
    },
    {
        "type": "Number",
        "value": "12",
        "position": 811,
        "end": 812
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 813
    },
    {
        "type": "Point",
        "value": ".",
        "position": 814
    },
    {
        "type": "Value",
        "value": "end",
        "position": 815,
        "end": 817
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 819
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
        "type": "LeftCurly",
        "value": "{",
        "position": 854
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 856
    },
    {
        "type": "Number",
        "value": "13",
        "position": 857,
        "end": 858
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 859
    },
    {
        "type": "Value",
        "value": "times",
        "position": 861,
        "end": 865
    },
    {
        "type": "Point",
        "value": ".",
        "position": 866
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 867
    },
    {
        "type": "Number",
        "value": "13",
        "position": 868,
        "end": 869
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 870
    },
    {
        "type": "Point",
        "value": ".",
        "position": 871
    },
    {
        "type": "Value",
        "value": "start",
        "position": 872,
        "end": 876
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 886
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 887
    },
    {
        "type": "Number",
        "value": "13",
        "position": 888,
        "end": 889
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 890
    },
    {
        "type": "Point",
        "value": ".",
        "position": 891
    },
    {
        "type": "Value",
        "value": "end",
        "position": 892,
        "end": 894
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 896
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
        "type": "Value",
        "value": "lunch",
        "position": 930,
        "end": 934
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 936
    },
    {
        "type": "Number",
        "value": "3",
        "position": 937,
        "end": 937
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 938
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 939
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 941
    },
    {
        "type": "Value",
        "value": "schedule",
        "position": 944,
        "end": 951
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 953
    },
    {
        "type": "Value",
        "value": "normal",
        "position": 954,
        "end": 959
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 960
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 962
    },
    {
        "type": "At",
        "value": "@",
        "position": 968
    },
    {
        "type": "Value",
        "value": "description",
        "position": 969,
        "end": 979
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 981
    },
    {
        "type": "Value",
        "value": "Normal",
        "position": 982,
        "end": 987
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 988
    },
    {
        "type": "Value",
        "value": "Schedule",
        "position": 989,
        "end": 996
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 997
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 998
    },
    {
        "type": "At",
        "value": "@",
        "position": 1005
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
        "type": "Value",
        "value": "class",
        "position": 1023,
        "end": 1027
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1029
    },
    {
        "type": "Value",
        "value": "arrival",
        "position": 1030,
        "end": 1036
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1037
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1040,
        "end": 1040
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1041
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1042,
        "end": 1043
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1045,
        "end": 1046
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1048,
        "end": 1048
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1049
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
        "type": "Value",
        "value": "class",
        "position": 1058,
        "end": 1062
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1064
    },
    {
        "type": "Value",
        "value": "period",
        "position": 1065,
        "end": 1070
    },
    {
        "type": "Number",
        "value": "0",
        "position": 1072,
        "end": 1072
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1073
    },
    {
        "type": "Number",
        "value": "6",
        "position": 1075,
        "end": 1075
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1076
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1077,
        "end": 1078
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1080,
        "end": 1081
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1083,
        "end": 1083
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1084
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
        "type": "Value",
        "value": "class",
        "position": 1093,
        "end": 1097
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1099
    },
    {
        "type": "Value",
        "value": "period",
        "position": 1100,
        "end": 1105
    },
    {
        "type": "Number",
        "value": "1",
        "position": 1107,
        "end": 1107
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1108
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1110,
        "end": 1110
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1111
    },
    {
        "type": "Number",
        "value": "35",
        "position": 1112,
        "end": 1113
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1115,
        "end": 1116
    },
    {
        "type": "Number",
        "value": "8",
        "position": 1118,
        "end": 1118
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1119
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
        "type": "Value",
        "value": "class",
        "position": 1128,
        "end": 1132
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1134
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1135,
        "end": 1135
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1136
    },
    {
        "type": "Number",
        "value": "8",
        "position": 1145,
        "end": 1145
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1146
    },
    {
        "type": "Number",
        "value": "50",
        "position": 1147,
        "end": 1148
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1150,
        "end": 1151
    },
    {
        "type": "Number",
        "value": "9",
        "position": 1153,
        "end": 1153
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1154
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
        "type": "Value",
        "value": "class",
        "position": 1163,
        "end": 1167
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1169
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1170,
        "end": 1170
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1171
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1179,
        "end": 1180
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1181
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1182,
        "end": 1183
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1185,
        "end": 1186
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1188,
        "end": 1189
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1190
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
        "type": "At",
        "value": "@",
        "position": 1200
    },
    {
        "type": "Value",
        "value": "lunches",
        "position": 1201,
        "end": 1207
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1209
    },
    {
        "type": "Value",
        "value": "from",
        "position": 1219,
        "end": 1222
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1224
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
        "type": "RightBracket",
        "value": "]",
        "position": 1233
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
        "type": "RightCurly",
        "value": "}",
        "position": 1267
    },
    {
        "type": "Value",
        "value": "lunch",
        "position": 1273,
        "end": 1277
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1279
    },
    {
        "type": "Number",
        "value": "1",
        "position": 1280,
        "end": 1280
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1281
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1283,
        "end": 1284
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1285
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1286,
        "end": 1287
    },
    {
        "type": "Value",
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
        "type": "Colon",
        "value": ":",
        "position": 1294
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
        "type": "Value",
        "value": "lunch",
        "position": 1303,
        "end": 1307
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1309
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1310,
        "end": 1310
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1311
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1313,
        "end": 1314
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1315
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1316,
        "end": 1317
    },
    {
        "type": "Value",
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
        "type": "Colon",
        "value": ":",
        "position": 1324
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
        "type": "Value",
        "value": "lunch",
        "position": 1333,
        "end": 1337
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1339
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1340,
        "end": 1340
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1341
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1343,
        "end": 1344
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1345
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1346,
        "end": 1347
    },
    {
        "type": "Value",
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
        "type": "Colon",
        "value": ":",
        "position": 1354
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
        "type": "At",
        "value": "@",
        "position": 1369
    },
    {
        "type": "Value",
        "value": "overides",
        "position": 1370,
        "end": 1377
    },
    {
        "type": "Value",
        "value": "overide",
        "position": 1383,
        "end": 1389
    },
    {
        "type": "Unknown",
        "value": "$",
        "position": 1391
    },
    {
        "type": "Value",
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
        "type": "Value",
        "value": "overide",
        "position": 1413,
        "end": 1419
    },
    {
        "type": "Unknown",
        "value": "$",
        "position": 1421
    },
    {
        "type": "Value",
        "value": "cambridge",
        "position": 1422,
        "end": 1430
    },
    {
        "type": "Unknown",
        "value": "(",
        "position": 1432
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1433
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1434,
        "end": 1435
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1436
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1438,
        "end": 1439
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1440
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1441,
        "end": 1442
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1444,
        "end": 1445
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1447,
        "end": 1448
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1449
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1450,
        "end": 1451
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1452
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1454
    },
    {
        "type": "Number",
        "value": "12",
        "position": 1455,
        "end": 1456
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1457
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1459,
        "end": 1460
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1461
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1462,
        "end": 1463
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1465,
        "end": 1466
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1468,
        "end": 1469
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1470
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1471,
        "end": 1472
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1473
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1475
    },
    {
        "type": "Number",
        "value": "13",
        "position": 1476,
        "end": 1477
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1478
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1480,
        "end": 1481
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1482
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1483,
        "end": 1484
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1486,
        "end": 1487
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1489,
        "end": 1490
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1491
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1492,
        "end": 1493
    },
    {
        "type": "Unknown",
        "value": ")",
        "position": 1494
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1495
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 1497
    },
    {
        "type": "Value",
        "value": "teacher",
        "position": 1500,
        "end": 1506
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1508
    },
    {
        "type": "Value",
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
        "type": "RightBracket",
        "value": "]",
        "position": 1520
    },
    {
        "type": "Value",
        "value": "ABCD",
        "position": 1522,
        "end": 1525
    },
    {
        "type": "Unknown",
        "value": "-",
        "position": 1526
    },
    {
        "type": "Number",
        "value": "1234",
        "position": 1527,
        "end": 1530
    },
    {
        "type": "Unknown",
        "value": "-",
        "position": 1531
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
        "type": "Value",
        "value": "event",
        "position": 1539,
        "end": 1543
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1545
    },
    {
        "type": "Value",
        "value": "singleday",
        "position": 1546,
        "end": 1554
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1555
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1557
    },
    {
        "type": "At",
        "value": "@",
        "position": 1563
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1564,
        "end": 1567
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1569
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
        "type": "Comma",
        "value": ",",
        "position": 1580
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1582,
        "end": 1585
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1586
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1587
    },
    {
        "type": "At",
        "value": "@",
        "position": 1593
    },
    {
        "type": "Value",
        "value": "schedule",
        "position": 1594,
        "end": 1601
    },
    {
        "type": "Value",
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
        "type": "At",
        "value": "@",
        "position": 1617
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1618,
        "end": 1624
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1626
    },
    {
        "type": "Value",
        "value": "Advisory",
        "position": 1627,
        "end": 1634
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 1635
    },
    {
        "type": "Value",
        "value": "Day",
        "position": 1636,
        "end": 1638
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1639
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1640
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 1642
    },
    {
        "type": "Value",
        "value": "event",
        "position": 1645,
        "end": 1649
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1651
    },
    {
        "type": "Value",
        "value": "multiday",
        "position": 1652,
        "end": 1659
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1660
    },
    {
        "type": "Value",
        "value": "messageonly",
        "position": 1662,
        "end": 1672
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1673
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1675
    },
    {
        "type": "At",
        "value": "@",
        "position": 1681
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1682,
        "end": 1685
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1687
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
        "type": "Comma",
        "value": ",",
        "position": 1698
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1700,
        "end": 1703
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1704
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1706,
        "end": 1707
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1709
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
        "type": "Comma",
        "value": ",",
        "position": 1720
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1722,
        "end": 1725
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1726
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1727
    },
    {
        "type": "At",
        "value": "@",
        "position": 1733
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1734,
        "end": 1740
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1742
    },
    {
        "type": "Value",
        "value": "Yall",
        "position": 1743,
        "end": 1746
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 1747
    },
    {
        "type": "Value",
        "value": "Silly",
        "position": 1748,
        "end": 1752
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1753
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1754
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 1756
    },
    {
        "type": "Value",
        "value": "event",
        "position": 1759,
        "end": 1763
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1765
    },
    {
        "type": "Value",
        "value": "reoccuring",
        "position": 1766,
        "end": 1775
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1776
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1778
    },
    {
        "type": "At",
        "value": "@",
        "position": 1784
    },
    {
        "type": "Value",
        "value": "schedule",
        "position": 1785,
        "end": 1792
    },
    {
        "type": "Value",
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
        "type": "At",
        "value": "@",
        "position": 1809
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1810,
        "end": 1816
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1818
    },
    {
        "type": "Value",
        "value": "Late",
        "position": 1819,
        "end": 1822
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 1823
    },
    {
        "type": "Value",
        "value": "Start",
        "position": 1824,
        "end": 1828
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1829
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1830
    },
    {
        "type": "At",
        "value": "@",
        "position": 1836
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
        "type": "LeftBracket",
        "value": "[",
        "position": 1854
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
        "type": "Comma",
        "value": ",",
        "position": 1865
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1867,
        "end": 1870
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1871
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
        "type": "LeftBracket",
        "value": "[",
        "position": 1883
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
        "type": "Comma",
        "value": ",",
        "position": 1894
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1896,
        "end": 1899
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1900
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1901
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 1903
    },
    {
        "type": "Value",
        "value": "event",
        "position": 1906,
        "end": 1910
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1912
    },
    {
        "type": "Value",
        "value": "eventrange",
        "position": 1913,
        "end": 1922
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1923
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1925
    },
    {
        "type": "At",
        "value": "@",
        "position": 1931
    },
    {
        "type": "Value",
        "value": "info",
        "position": 1932,
        "end": 1935
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1937
    },
    {
        "type": "Value",
        "value": "Assemblies",
        "position": 1938,
        "end": 1947
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1948
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1949
    },
    {
        "type": "At",
        "value": "@",
        "position": 1955
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1956,
        "end": 1959
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1961
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
        "type": "Comma",
        "value": ",",
        "position": 1972
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1974,
        "end": 1977
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1978
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1980,
        "end": 1981
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1983
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
        "type": "Comma",
        "value": ",",
        "position": 1994
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1996,
        "end": 1999
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 2000
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2001
    },
    {
        "type": "At",
        "value": "@",
        "position": 2007
    },
    {
        "type": "Value",
        "value": "events",
        "position": 2008,
        "end": 2013
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 2015
    },
    {
        "type": "Value",
        "value": "messageonly",
        "position": 2016,
        "end": 2026
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 2027
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
        "type": "LeftBracket",
        "value": "[",
        "position": 2038
    },
    {
        "type": "Number",
        "value": "1",
        "position": 2039,
        "end": 2039
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 2040
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2042
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2043,
        "end": 2051
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 2052
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2053,
        "end": 2059
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 2060
    },
    {
        "type": "Number",
        "value": "1",
        "position": 2061,
        "end": 2061
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2062
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
        "type": "LeftBracket",
        "value": "[",
        "position": 2073
    },
    {
        "type": "Number",
        "value": "2",
        "position": 2074,
        "end": 2074
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 2075
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2077
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2078,
        "end": 2086
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 2087
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2088,
        "end": 2094
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 2095
    },
    {
        "type": "Number",
        "value": "2",
        "position": 2096,
        "end": 2096
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2097
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
        "type": "LeftBracket",
        "value": "[",
        "position": 2108
    },
    {
        "type": "Number",
        "value": "3",
        "position": 2109,
        "end": 2109
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 2110
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2112
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2113,
        "end": 2121
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 2122
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2123,
        "end": 2129
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 2130
    },
    {
        "type": "Number",
        "value": "3",
        "position": 2131,
        "end": 2131
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2132
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2133
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 2135
    }
]