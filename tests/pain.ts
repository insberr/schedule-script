// i could write JSON
const jsonSchedules = {
    "normal": {
        "overides": [{
                "name": "cambridge",
                "condition": {
                    "if": {
                        "calsses": {
                            "has": {
                                "periods": [11, 12, 13],
                                "compare": "or"
                            }
                        }
                    }
                }
            }]}}
// or i could write 
/*
Schedule [Normal] {
    // ...
    overides: [
        ScheduleOveride [Cambridge] {
            condition: (classes, displaySchedule, displayEvent) => {
                return classes.has period (11 || 12 || 13)
            }
        }
    ]
}
*/