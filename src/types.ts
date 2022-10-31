// add types here
export type Block = (Statement | Block)[]
export type Statement = {
    statement: string,
    args: (Block | string)[]
}