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
        "type": "Number",
        "value": "6",
        "position": 147,
        "end": 147
    },
    {
        "type": "Colon",
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
        "type": "Number",
        "value": "7",
        "position": 155,
        "end": 155
    },
    {
        "type": "Colon",
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
        "value": "'",
        "position": 975
    },
    {
        "type": "Value",
        "value": "Normal",
        "position": 976,
        "end": 981
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 982
    },
    {
        "type": "Value",
        "value": "Schedule",
        "position": 983,
        "end": 990
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 991
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 992
    },
    {
        "type": "At",
        "value": "@",
        "position": 999
    },
    {
        "type": "Value",
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
        "type": "Value",
        "value": "class",
        "position": 1017,
        "end": 1021
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1023
    },
    {
        "type": "Value",
        "value": "arrival",
        "position": 1024,
        "end": 1030
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1031
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1034,
        "end": 1034
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1035
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1036,
        "end": 1037
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1039,
        "end": 1040
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1042,
        "end": 1042
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1043
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
        "type": "Value",
        "value": "class",
        "position": 1052,
        "end": 1056
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1058
    },
    {
        "type": "Value",
        "value": "period",
        "position": 1059,
        "end": 1064
    },
    {
        "type": "Number",
        "value": "0",
        "position": 1066,
        "end": 1066
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1067
    },
    {
        "type": "Number",
        "value": "6",
        "position": 1069,
        "end": 1069
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1070
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1071,
        "end": 1072
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1074,
        "end": 1075
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1077,
        "end": 1077
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1078
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
        "type": "Value",
        "value": "class",
        "position": 1087,
        "end": 1091
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1093
    },
    {
        "type": "Value",
        "value": "period",
        "position": 1094,
        "end": 1099
    },
    {
        "type": "Number",
        "value": "1",
        "position": 1101,
        "end": 1101
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1102
    },
    {
        "type": "Number",
        "value": "7",
        "position": 1104,
        "end": 1104
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1105
    },
    {
        "type": "Number",
        "value": "35",
        "position": 1106,
        "end": 1107
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1109,
        "end": 1110
    },
    {
        "type": "Number",
        "value": "8",
        "position": 1112,
        "end": 1112
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1113
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
        "type": "Value",
        "value": "class",
        "position": 1122,
        "end": 1126
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1128
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1129,
        "end": 1129
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1130
    },
    {
        "type": "Number",
        "value": "8",
        "position": 1139,
        "end": 1139
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1140
    },
    {
        "type": "Number",
        "value": "50",
        "position": 1141,
        "end": 1142
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1144,
        "end": 1145
    },
    {
        "type": "Number",
        "value": "9",
        "position": 1147,
        "end": 1147
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1148
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
        "type": "Value",
        "value": "class",
        "position": 1157,
        "end": 1161
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1163
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1164,
        "end": 1164
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1165
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1173,
        "end": 1174
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1175
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1176,
        "end": 1177
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1179,
        "end": 1180
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1182,
        "end": 1183
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1184
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
        "type": "At",
        "value": "@",
        "position": 1194
    },
    {
        "type": "Value",
        "value": "lunches",
        "position": 1195,
        "end": 1201
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1203
    },
    {
        "type": "Value",
        "value": "from",
        "position": 1213,
        "end": 1216
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1218
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
        "type": "RightBracket",
        "value": "]",
        "position": 1227
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
        "type": "RightCurly",
        "value": "}",
        "position": 1261
    },
    {
        "type": "Value",
        "value": "lunch",
        "position": 1267,
        "end": 1271
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1273
    },
    {
        "type": "Number",
        "value": "1",
        "position": 1274,
        "end": 1274
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1275
    },
    {
        "type": "Number",
        "value": "10",
        "position": 1277,
        "end": 1278
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1279
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1280,
        "end": 1281
    },
    {
        "type": "Value",
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
        "type": "Colon",
        "value": ":",
        "position": 1288
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
        "type": "Value",
        "value": "lunch",
        "position": 1297,
        "end": 1301
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1303
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1304,
        "end": 1304
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1305
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1307,
        "end": 1308
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1309
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1310,
        "end": 1311
    },
    {
        "type": "Value",
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
        "type": "Colon",
        "value": ":",
        "position": 1318
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
        "type": "Value",
        "value": "lunch",
        "position": 1327,
        "end": 1331
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1333
    },
    {
        "type": "Number",
        "value": "3",
        "position": 1334,
        "end": 1334
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1335
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1337,
        "end": 1338
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1339
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1340,
        "end": 1341
    },
    {
        "type": "Value",
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
        "type": "Colon",
        "value": ":",
        "position": 1348
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
        "type": "At",
        "value": "@",
        "position": 1363
    },
    {
        "type": "Value",
        "value": "overides",
        "position": 1364,
        "end": 1371
    },
    {
        "type": "Value",
        "value": "overide",
        "position": 1377,
        "end": 1383
    },
    {
        "type": "Unknown",
        "value": "$",
        "position": 1385
    },
    {
        "type": "Value",
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
        "type": "Value",
        "value": "overide",
        "position": 1407,
        "end": 1413
    },
    {
        "type": "Unknown",
        "value": "$",
        "position": 1415
    },
    {
        "type": "Value",
        "value": "cambridge",
        "position": 1416,
        "end": 1424
    },
    {
        "type": "Unknown",
        "value": "(",
        "position": 1426
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1427
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1428,
        "end": 1429
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1430
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1432,
        "end": 1433
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1434
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1435,
        "end": 1436
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1438,
        "end": 1439
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1441,
        "end": 1442
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1443
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1444,
        "end": 1445
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1446
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1448
    },
    {
        "type": "Number",
        "value": "12",
        "position": 1449,
        "end": 1450
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1451
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1453,
        "end": 1454
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1455
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1456,
        "end": 1457
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1459,
        "end": 1460
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1462,
        "end": 1463
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1464
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1465,
        "end": 1466
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1467
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1469
    },
    {
        "type": "Number",
        "value": "13",
        "position": 1470,
        "end": 1471
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1472
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1474,
        "end": 1475
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1476
    },
    {
        "type": "Number",
        "value": "00",
        "position": 1477,
        "end": 1478
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1480,
        "end": 1481
    },
    {
        "type": "Number",
        "value": "11",
        "position": 1483,
        "end": 1484
    },
    {
        "type": "Colon",
        "value": ":",
        "position": 1485
    },
    {
        "type": "Number",
        "value": "30",
        "position": 1486,
        "end": 1487
    },
    {
        "type": "Unknown",
        "value": ")",
        "position": 1488
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1489
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 1491
    },
    {
        "type": "Value",
        "value": "teacher",
        "position": 1494,
        "end": 1500
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1502
    },
    {
        "type": "Value",
        "value": "Rick",
        "position": 1503,
        "end": 1506
    },
    {
        "type": "Value",
        "value": "Astley",
        "position": 1508,
        "end": 1513
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1514
    },
    {
        "type": "Value",
        "value": "ABCD",
        "position": 1516,
        "end": 1519
    },
    {
        "type": "Unknown",
        "value": "-",
        "position": 1520
    },
    {
        "type": "Number",
        "value": "1234",
        "position": 1521,
        "end": 1524
    },
    {
        "type": "Unknown",
        "value": "-",
        "position": 1525
    },
    {
        "type": "Value",
        "value": "AB34",
        "position": 1526,
        "end": 1529
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1530
    },
    {
        "type": "Value",
        "value": "event",
        "position": 1533,
        "end": 1537
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1539
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1540,
        "end": 1547
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1549,
        "end": 1549
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1550
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1552,
        "end": 1555
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1556
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1558
    },
    {
        "type": "At",
        "value": "@",
        "position": 1564
    },
    {
        "type": "Value",
        "value": "type",
        "position": 1565,
        "end": 1568
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1570
    },
    {
        "type": "Value",
        "value": "singleday",
        "position": 1571,
        "end": 1579
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1580
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1581
    },
    {
        "type": "At",
        "value": "@",
        "position": 1587
    },
    {
        "type": "Value",
        "value": "schedule",
        "position": 1588,
        "end": 1595
    },
    {
        "type": "Value",
        "value": "advisory",
        "position": 1597,
        "end": 1604
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1605
    },
    {
        "type": "At",
        "value": "@",
        "position": 1611
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1612,
        "end": 1618
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1620
    },
    {
        "type": "Value",
        "value": "Advisory",
        "position": 1621,
        "end": 1628
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 1629
    },
    {
        "type": "Value",
        "value": "Day",
        "position": 1630,
        "end": 1632
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1633
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1634
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 1636
    },
    {
        "type": "Value",
        "value": "event",
        "position": 1639,
        "end": 1643
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1645
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1646,
        "end": 1653
    },
    {
        "type": "Number",
        "value": "2",
        "position": 1655,
        "end": 1655
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1656
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1658,
        "end": 1661
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1662
    },
    {
        "type": "Value",
        "value": "to",
        "position": 1664,
        "end": 1665
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1667
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1668,
        "end": 1675
    },
    {
        "type": "Number",
        "value": "5",
        "position": 1677,
        "end": 1677
    },
    {
        "type": "Comma",
        "value": ",",
        "position": 1678
    },
    {
        "type": "Number",
        "value": "2022",
        "position": 1680,
        "end": 1683
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1684
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1686
    },
    {
        "type": "At",
        "value": "@",
        "position": 1692
    },
    {
        "type": "Value",
        "value": "type",
        "position": 1693,
        "end": 1696
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1698
    },
    {
        "type": "Value",
        "value": "messageonly",
        "position": 1699,
        "end": 1709
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1710
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1711
    },
    {
        "type": "At",
        "value": "@",
        "position": 1717
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1718,
        "end": 1724
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1726
    },
    {
        "type": "Value",
        "value": "Yall",
        "position": 1727,
        "end": 1730
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 1731
    },
    {
        "type": "Value",
        "value": "Silly",
        "position": 1732,
        "end": 1736
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1737
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1738
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 1740
    },
    {
        "type": "Value",
        "value": "event",
        "position": 1743,
        "end": 1747
    },
    {
        "type": "LeftCurly",
        "value": "{",
        "position": 1749
    },
    {
        "type": "At",
        "value": "@",
        "position": 1755
    },
    {
        "type": "Value",
        "value": "type",
        "position": 1756,
        "end": 1759
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1761
    },
    {
        "type": "Value",
        "value": "reoccuring",
        "position": 1762,
        "end": 1771
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 1772
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1773
    },
    {
        "type": "At",
        "value": "@",
        "position": 1779
    },
    {
        "type": "Value",
        "value": "schedule",
        "position": 1780,
        "end": 1787
    },
    {
        "type": "Value",
        "value": "lateStart",
        "position": 1789,
        "end": 1797
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1798
    },
    {
        "type": "At",
        "value": "@",
        "position": 1804
    },
    {
        "type": "Value",
        "value": "message",
        "position": 1805,
        "end": 1811
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1813
    },
    {
        "type": "Value",
        "value": "Late",
        "position": 1814,
        "end": 1817
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 1818
    },
    {
        "type": "Value",
        "value": "Start",
        "position": 1819,
        "end": 1823
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 1824
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1825
    },
    {
        "type": "At",
        "value": "@",
        "position": 1831
    },
    {
        "type": "Value",
        "value": "occurs",
        "position": 1832,
        "end": 1837
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 1838
    },
    {
        "type": "Value",
        "value": "date",
        "position": 1844,
        "end": 1847
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 1849
    },
    {
        "type": "Value",
        "value": "November",
        "position": 1850,
        "end": 1857
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
        "value": "'",
        "position": 2029
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2030,
        "end": 2038
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 2039
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2040,
        "end": 2046
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2047
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2048
    },
    {
        "type": "Value",
        "value": "day",
        "position": 2054,
        "end": 2056
    },
    {
        "type": "LeftBracket",
        "value": "[",
        "position": 2058
    },
    {
        "type": "Number",
        "value": "2",
        "position": 2059,
        "end": 2059
    },
    {
        "type": "RightBracket",
        "value": "]",
        "position": 2060
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2062
    },
    {
        "type": "Value",
        "value": "Something",
        "position": 2063,
        "end": 2071
    },
    {
        "type": "WhiteSpace",
        "value": " ",
        "position": 2072
    },
    {
        "type": "Value",
        "value": "Strange",
        "position": 2073,
        "end": 2079
    },
    {
        "type": "SingleQuote",
        "value": "'",
        "position": 2080
    },
    {
        "type": "SimiColon",
        "value": ";",
        "position": 2081
    },
    {
        "type": "RightCurly",
        "value": "}",
        "position": 2083
    }
]