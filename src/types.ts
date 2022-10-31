// add types here
export type Block = Statement[]
export type Statement = {
    statement: string,
    args: (Block | string)[]
}