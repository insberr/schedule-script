// add types here
export type Block = (Statement | Block)[]
export type Statement = {
    statement: string,
    args: Arg[]
    comment?: string
}

export type Arg = BlockArg | QuoteArg | TextArg | BracketArg

export type BlockArg = {
    type: 'block',
    data: Block
}
export type QuoteArg = {
    type: 'quote',
    data: string
}
export type TextArg = {
    type: 'text',
    data: string
}
export type BracketArg = {
    type: 'bracket',
    data: string
}

export type Time = {
    h: number
    m: number
    s: number
}

export type TimeRange = {
    start: Time,
    end: Time
}
