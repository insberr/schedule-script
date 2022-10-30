const tokens = [
    {
        "type": "Value",
        "value": "overide",
        "position": 1,
        "end": 7
    },
    {
        "type": "Value",
        "value": "defaultZero",
        "position": 9,
        "end": 19
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 21
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
        "type": "Value",
        "value": "schedule",
        "position": 63,
        "end": 70
    },
    {
        "type": "Value",
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
        "type": "LeftBracket",
        "value": "[",
        "position": 89
    },
    {
        "type": "Value",
        "value": "arrival",
        "position": 90,
        "end": 96
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 97
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
        "type": "Value",
        "value": "class",
        "position": 113,
        "end": 117
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 119
    },
    {
        "type": "Value",
        "value": "arrival",
        "position": 120,
        "end": 126
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 127
    },
    {
        "type": "Value",
        "value": "with",
        "position": 129,
        "end": 132
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 134
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 136
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
        "type": "RightBracket",
        "value": "]",
        "position": 145
    },
    {
        "type": "Key",
        "value": "6",
        "position": 147,
        "end": 147
    },
    {
        "type": "ColonKeyValue",
        "value": ":",
        "position": 148
    },
    {
        "type": "Number",
        "value": "30",
        "position": 149,
        "end": 150
    },
    {
        "type": "Value",
        "value": "to",
        "position": 152,
        "end": 153
    },
    {
        "type": "Key",
        "value": "7",
        "position": 155,
        "end": 155
    },
    {
        "type": "ColonKeyValue",
        "value": ":",
        "position": 156
    },
    {
        "type": "Number",
        "value": "30",
        "position": 157,
        "end": 158
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 160
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 161
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 163
    },
    {
        "type": "Value",
        "value": "overide",
        "position": 166,
        "end": 172
    },
    {
        "type": "Value",
        "value": "cambridge",
        "position": 174,
        "end": 182
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 184
    },
    {
        "type": "At",
        "value": "@",
        "position": 200
    },
    {
        "type": "Value",
        "value": "options",
        "position": 201,
        "end": 207
    },
    {
        "type": "Unknown",
        "value": "(",
        "position": 209
    },
    {
        "type": "Value",
        "value": "times",
        "position": 210,
        "end": 214
    },
    {
        "type": "Unknown",
        "value": ")",
        "position": 215
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
        "type": "Comma",
        "value": ",",
        "position": 269
    },
    {
        "type": "Number",
        "value": "12",
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
        "type": "At",
        "value": "@",
        "position": 302
    },
    {
        "type": "Value",
        "value": "overide",
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
        "type": "LeftBracket",
        "value": "[",
        "position": 355
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
        "type": "RightBracket",
        "value": "]",
        "position": 364
    },
    {
        "type": "Unknown",
        "value": "&",
        "position": 366
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 368
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
        "type": "RightBracket",
        "value": "]",
        "position": 377
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
        "type": "LeftCurly",
        "value": "{",
        "position": 391
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 393
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
        "type": "RightBracket",
        "value": "]",
        "position": 403
    },
    {
        "type": "Value",
        "value": "times",
        "position": 405,
        "end": 409
    },
    {
        "type": "Point",
        "value": ".",
        "position": 410
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 411
    },
    {
        "type": "Number",
        "value": "11",
        "position": 412,
        "end": 413
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 414
    },
    {
        "type": "Point",
        "value": ".",
        "position": 415
    },
    {
        "type": "Value",
        "value": "start",
        "position": 416,
        "end": 420
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 430
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 431
    },
    {
        "type": "Number",
        "value": "11",
        "position": 432,
        "end": 433
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 434
    },
    {
        "type": "Point",
        "value": ".",
        "position": 435
    },
    {
        "type": "Value",
        "value": "end",
        "position": 436,
        "end": 438
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 440
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
        "type": "LeftCurly",
        "value": "{",
        "position": 469
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 471
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
        "type": "RightBracket",
        "value": "]",
        "position": 481
    },
    {
        "type": "Value",
        "value": "times",
        "position": 483,
        "end": 487
    },
    {
        "type": "Point",
        "value": ".",
        "position": 488
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 489
    },
    {
        "type": "Number",
        "value": "12",
        "position": 490,
        "end": 491
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 492
    },
    {
        "type": "Point",
        "value": ".",
        "position": 493
    },
    {
        "type": "Value",
        "value": "start",
        "position": 494,
        "end": 498
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 508
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 509
    },
    {
        "type": "Number",
        "value": "12",
        "position": 510,
        "end": 511
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 512
    },
    {
        "type": "Point",
        "value": ".",
        "position": 513
    },
    {
        "type": "Value",
        "value": "end",
        "position": 514,
        "end": 516
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 518
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
        "type": "LeftCurly",
        "value": "{",
        "position": 553
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 555
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
        "type": "RightBracket",
        "value": "]",
        "position": 565
    },
    {
        "type": "Value",
        "value": "times",
        "position": 567,
        "end": 571
    },
    {
        "type": "Point",
        "value": ".",
        "position": 572
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 573
    },
    {
        "type": "Number",
        "value": "13",
        "position": 574,
        "end": 575
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 576
    },
    {
        "type": "Point",
        "value": ".",
        "position": 577
    },
    {
        "type": "Value",
        "value": "start",
        "position": 578,
        "end": 582
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 592
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 593
    },
    {
        "type": "Number",
        "value": "13",
        "position": 594,
        "end": 595
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 596
    },
    {
        "type": "Point",
        "value": ".",
        "position": 597
    },
    {
        "type": "Value",
        "value": "end",
        "position": 598,
        "end": 600
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 602
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
        "type": "At",
        "value": "@",
        "position": 631
    },
    {
        "type": "Value",
        "value": "overide",
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
        "type": "LeftBracket",
        "value": "[",
        "position": 680
    },
    {
        "type": "Number",
        "value": "2",
        "position": 681,
        "end": 681
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 682
    },
    {
        "type": "Unknown",
        "value": "&",
        "position": 684
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 686
    },
    {
        "type": "Number",
        "value": "3",
        "position": 687,
        "end": 687
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 688
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
        "type": "LeftCurly",
        "value": "{",
        "position": 702
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 704
    },
    {
        "type": "Number",
        "value": "11",
        "position": 705,
        "end": 706
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 707
    },
    {
        "type": "Value",
        "value": "times",
        "position": 709,
        "end": 713
    },
    {
        "type": "Point",
        "value": ".",
        "position": 714
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 715
    },
    {
        "type": "Number",
        "value": "11",
        "position": 716,
        "end": 717
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 718
    },
    {
        "type": "Point",
        "value": ".",
        "position": 719
    },
    {
        "type": "Value",
        "value": "start",
        "position": 720,
        "end": 724
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 734
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 735
    },
    {
        "type": "Number",
        "value": "11",
        "position": 736,
        "end": 737
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 738
    },
    {
        "type": "Point",
        "value": ".",
        "position": 739
    },
    {
        "type": "Value",
        "value": "end",
        "position": 740,
        "end": 742
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 744
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
        "type": "LeftCurly",
        "value": "{",
        "position": 773
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 775
    },
    {
        "type": "Number",
        "value": "12",
        "position": 776,
        "end": 777
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 778
    },
    {
        "type": "Value",
        "value": "times",
        "position": 780,
        "end": 784
    },
    {
        "type": "Point",
        "value": ".",
        "position": 785
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 786
    },
    {
        "type": "Number",
        "value": "12",
        "position": 787,
        "end": 788
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 789
    },
    {
        "type": "Point",
        "value": ".",
        "position": 790
    },
    {
        "type": "Value",
        "value": "start",
        "position": 791,
        "end": 795
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 805
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 806
    },
    {
        "type": "Number",
        "value": "12",
        "position": 807,
        "end": 808
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 809
    },
    {
        "type": "Point",
        "value": ".",
        "position": 810
    },
    {
        "type": "Value",
        "value": "end",
        "position": 811,
        "end": 813
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 815
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
        "type": "LeftCurly",
        "value": "{",
        "position": 850
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 852
    },
    {
        "type": "Number",
        "value": "13",
        "position": 853,
        "end": 854
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 855
    },
    {
        "type": "Value",
        "value": "times",
        "position": 857,
        "end": 861
    },
    {
        "type": "Point",
        "value": ".",
        "position": 862
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 863
    },
    {
        "type": "Number",
        "value": "13",
        "position": 864,
        "end": 865
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 866
    },
    {
        "type": "Point",
        "value": ".",
        "position": 867
    },
    {
        "type": "Value",
        "value": "start",
        "position": 868,
        "end": 872
    },
    {
        "type": "Value",
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
        "type": "Point",
        "value": ".",
        "position": 882
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 883
    },
    {
        "type": "Number",
        "value": "13",
        "position": 884,
        "end": 885
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 886
    },
    {
        "type": "Point",
        "value": ".",
        "position": 887
    },
    {
        "type": "Value",
        "value": "end",
        "position": 888,
        "end": 890
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 892
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
        "type": "Value",
        "value": "lunch",
        "position": 926,
        "end": 930
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 932
    },
    {
        "type": "Number",
        "value": "3",
        "position": 933,
        "end": 933
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 934
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 935
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 937
    },
    {
        "type": "Value",
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
        "type": "LeftCurly",
        "value": "{",
        "position": 956
    },
    {
        "type": "At",
        "value": "@",
        "position": 962
    },
    {
        "type": "Value",
        "value": "description",
        "position": 963,
        "end": 973
    },
    {
        "type": "SingleQuote",
        "value": "'Normal Schedule",
        "position": 975,
        "end": 991
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1859,
        "end": 1859
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1860
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1862,
        "end": 1865
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1866
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1867
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1873,
        "end": 1876
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1878
    },
    {
        "type": "Value",
        "value": "november",
        "position": 1879,
        "end": 1886
    },
    {
        "type": "Number",
        "value": "9",
        "position": 1888,
        "end": 1888
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1889
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1891,
        "end": 1894
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1895
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1896
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 1898
    },
    {
        "type": "Value",
        "value": "event",
        "position": 1901,
        "end": 1905
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1907
    },
    {
        "type": "At",
        "value": "@",
        "position": 1913
    },
    {
        "type": "Value",
        "value": "type",
        "position": 1914,
        "end": 1917
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1919
    },
    {
        "type": "Value",
        "value": "group",
        "position": 1920,
        "end": 1924
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1925
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1926
    },
    {
        "type": "At",
        "value": "@",
        "position": 1932
    },
    {
        "type": "Value",
        "value": "starts",
        "position": 1933,
        "end": 1938
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1940
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1941,
        "end": 1948
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1950,
        "end": 1950
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1951
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1953,
        "end": 1956
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1957
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1958
    },
    {
        "type": "At",
        "value": "@",
        "position": 1964
    },
    {
        "type": "Value",
        "value": "ends",
        "position": 1965,
        "end": 1968
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1970
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1971,
        "end": 1978
    },
    {
        "type": "Number",
        "value": "5",
        "position": 1980,
        "end": 1980
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1981
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1983,
        "end": 1986
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1987
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1988
    },
    {
        "type": "At",
        "value": "@",
        "position": 1994
    },
    {
        "type": "Value",
        "value": "events",
        "position": 1995,
        "end": 2000
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 2002
    },
    {
        "type": "Value",
        "value": "messageonly",
        "position": 2003,
        "end": 2013
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 2014
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2015
    },
    {
        "type": "Value",
        "value": "day",
        "position": 2021,
        "end": 2023
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 2025
    },
    {
        "type": "Number",
        "value": "1",
        "position": 2026,
        "end": 2026
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 2027
    },
    {
        "type": "SingleQuote",
        "value": "'Something Strange",
        "position": 2029,
        "end": 2047
    }
]