import type { Context, PArgs } from "./execute"

type StatementFunc = (args: PArgs, context: Context) => void


export const StatementMap = new Map<string, StatementFunc>()
    .set("schedule",(args, c) => {
        if (c.statement) {
            //console.log(c.statement)
            c.schedule = args
            return;
        } else {
            // define top level schedule
            c.schedules = (c.schedules || {})
            const name = args.shift() as string;
            const data = args.pop() as Context;
            c.schedules[name] = data
        }
    })
    .set("class", (args, c) => {
        c.classes = (c.classes || [])
        c.classes.push(args)
    })
    .set("event", (args, c) => {
        c.events = (c.events || [])
        c.events.push(args[0])
    })

// you could import statements from other files and add them to the map.