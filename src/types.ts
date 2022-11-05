// add types here
export type Block = (Statement | Block)[];
export type Statement = {
    statement: string;
    args: Arg[];
    comment?: { statement: string; args: Arg[] };
    location: {
        start: {
            offset: number;
            line: number;
            column: number;
        };
        end: {
            offset: number;
            line: number;
            column: number;
        };
    };
};

export type MinifyOptions = {
    keepMultiLineComments?: boolean;
    uncompressTopLevelMultiLineComments?: boolean;
    keepSingleLineComments?: boolean;
};

export type Arg = BlockArg | QuoteArg | TextArg | BracketArg;

export type BlockArg = {
    type: 'block';
    data: Block;
};
export type QuoteArg = {
    type: 'quote';
    data: string;
};
export type TextArg = {
    type: 'text';
    data: string;
};
export type BracketArg = {
    type: 'bracket';
    data: string;
};

export type Time = {
    h: number;
    m: number;
    s: number;
};

export type TimeRange = {
    start: Time;
    end: Time;
};
