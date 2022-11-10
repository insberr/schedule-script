# schedule-script

"Schedule script is a simple script to schedule a script to run at a specific time." -GitHub CoPilot

Schedule Script is a scripting language developed for [Schedule Personalizer](https://github.com/insberr/schedule-personalizer). It was created because why the heck not and also because I did not want to write the config in JSON or TypeScript. Something custom would make some things way easier to work with.

That aside. HFGL.

## example react thingy

please improve

```ts

export function useSchedule(input: string, date: Date, extra: any) {
    const parsed: SCS = useMemo(() => {
        return new SCS(input)
    }. [input])

    const sch = useMemo(() => {
        return parsed.scheduleFor(date, extra)
    }, [parsed,date,extra])

    const raw = useMemo(() => {
        return parsed.exec({ displayDate: date, ...extra })
    }, [parsed,date,extra])
    return {sch, raw /* we should pull things out of the raw, like lunch info and config, not just returning it as is */}
}
```
