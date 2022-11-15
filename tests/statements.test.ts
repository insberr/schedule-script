import exp from 'constants';
import { isSameDay } from 'date-fns';
import { SCS } from '../src/scs';

describe('Statements', () => {
    describe('schedule', () => {
        it('should set schedule', () => {
            const scs = new SCS(`
            schedule test {
                set testVALUE 1234;
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.testVALUE', '1234');
        });
        it('should work inside an event statement', () => {
            const scs = new SCS(`
            schedule test {
                set testVALUE 1234;
            };
            event {
                schedule test;
            };
            `);
            const out = scs.exec();
            //console.log(out)
            expect(out).toHaveProperty('events.0.schedule', 'test');
        });
        it('should throw an error with no schedules', () => {
            const scs = new SCS(`
            event {
                schedule test;
            };
            `);
            expect(() => scs.exec()).toThrowError('unable to find schedules');
        });
        it('should throw an error with a non existant schedule', () => {
            const scs = new SCS(`
            schedule test {
                set testVALUE 1234;
            };
            event {
                schedule test2;
            };
            `);
            expect(() => scs.exec()).toThrowError('Cannot find schedule test2');
        });
        it('shouldnt error when not inside root/event', () => {
            const scs = new SCS(`
            gamer {
                schedule test;
            };
            `);
            expect(() => scs.exec()).not.toThrowError();
        });
    });
    describe('event', () => {
        it('should write its arguments to events', () => {
            const scs = new SCS(`
            event {
                set testVALUE 1234;
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('events.0.testVALUE', '1234');
        });
    });
    describe('class', () => {
        it('should write a class entry', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes.0.type', 'period');
            expect(out).toHaveProperty('schedules.test.classes.0.num', 1);
            expect(out).toHaveProperty('schedules.test.classes.0.start', { h: 5, m: 0, s: 0 });
            expect(out).toHaveProperty('schedules.test.classes.0.end', { h: 6, m: 0, s: 0 });
        });
        it('should infer type period', () => {
            const scs = new SCS(`
            schedule test {
                class [1] [5:00 to 6:00];
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes.0.type', 'period');
            expect(out).toHaveProperty('schedules.test.classes.0.num', 1);
            expect(out).toHaveProperty('schedules.test.classes.0.start', { h: 5, m: 0, s: 0 });
            expect(out).toHaveProperty('schedules.test.classes.0.end', { h: 6, m: 0, s: 0 });
        });
        it('should infer null', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes.0.type', 'arrival');
            expect(out).toHaveProperty('schedules.test.classes.0.num', null);
            expect(out).toHaveProperty('schedules.test.classes.0.start', { h: 5, m: 0, s: 0 });
            expect(out).toHaveProperty('schedules.test.classes.0.end', { h: 6, m: 0, s: 0 });
        });
    });
    describe('term', () => {
        it('should parse dates correctly', () => {
            const scs = new SCS(`
            term 1 [November 21, 2022] [June 1, 2023];
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('terms.0.start');
            expect(out.terms[0].start).toBeInstanceOf(Date);
            expect(out).toHaveProperty('terms.0.end');
            expect(out.terms[0].end).toBeInstanceOf(Date);
            expect(out).toHaveProperty('terms.0.termIndex', 0);
            expect(isSameDay(out.terms[0].start, new Date(2022, 10, 21))).toBe(true);
            expect(isSameDay(out.terms[0].end, new Date(2023, 5, 1))).toBe(true);
        });
    });
    describe('terms', () => {
        it('should write term entries', () => {
            const scs = new SCS(`
            terms {
                term 1 [November 21, 2022] [June 1, 2023];
                term 2 [June 2, 2023] [June 19, 2023];
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('terms.0');
            expect(out).toHaveProperty('terms.1');
        });
        describe('should detect the term correctly', () => {
            it('1', () => {
                const scs = new SCS(`
                terms {
                    term 1 [November 21, 2022] [June 1, 2023];
                    term 2 [June 2, 2023] [June 19, 2023];
                };
                `);
                const out = scs.exec({ displayDate: new Date(2022, 10, 23) });
                expect(out).toHaveProperty('term', 1);
            });
            it('2', () => {
                const scs = new SCS(`
                terms {
                    term 1 [November 21, 2022] [June 1, 2023];
                    term 2 [June 2, 2023] [June 19, 2023];
                };
                `);
                const out = scs.exec({ displayDate: new Date(2023, 5, 6) });
                expect(out).toHaveProperty('term', 2);
            });
            it('before', () => {
                const scs = new SCS(`
                terms {
                    term 1 [November 21, 2022] [June 1, 2023];
                    term 2 [June 2, 2023] [June 19, 2023];
                };
                `);
                const out = scs.exec({ displayDate: new Date(2022, 10, 20) });
                expect(out).toHaveProperty('term', 0);
            });
            it('after', () => {
                const scs = new SCS(`
                terms {
                    term 1 [November 21, 2022] [June 1, 2023];
                    term 2 [June 2, 2023] [June 19, 2023];
                };
                `);
                const out = scs.exec({ displayDate: new Date(2023, 6, 1) });
                expect(out).toHaveProperty('term', 0);
            });
            it("should'nt error when theres no terms", () => {
                const scs = new SCS(`
                terms {
                    {
                        set ok crong;
                    }
                };
                `);
                const out = scs.exec({ displayDate: new Date(2023, 6, 1) });
                expect(out).toHaveProperty('term', 0);
            });
        });
    });
    describe('only', () => {
        it('should stop execution when the thing fails', () => {
            const scs = new SCS(`
            set test 1234;
            {
                only t 0;
                set test 5678;
            }
            `);
            const out = scs.exec({ t: '1' });
            expect(out).toHaveProperty('test', '1234');
        });
        it('should continue execution when the thing passes', () => {
            const scs = new SCS(`
            set test 1234;
            {
                only t 0;
                set test 5678;
            }
            `);
            const out = scs.exec({ t: '0' });
            expect(out).toHaveProperty('test', '5678');
        });
        it('shouldnt continue if the item isnt found', () => {
            const scs = new SCS(`
            set test 1234;
            {
                only t 0;
                set test 5678;
            }
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('test', '1234');
        });
    });
    describe('lunches', () => {
        it('should create a list of ids', () => {
            const scs = new SCS(`
            lunches {
                teacher [firsty] aaaa 1;
                teacher [secondy] bbbb 2;
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('lunches.aaaa', 1);
            expect(out).toHaveProperty('lunches.bbbb', 2);
            expect(out).toHaveProperty('teachers.0', { id: 'aaaa', name: 'firsty', lunch: 1 });
            expect(out).toHaveProperty('teachers.1', { id: 'bbbb', name: 'secondy', lunch: 2 });
        });
    });
    describe('inherit', () => {
        it('should inherit from another schedule', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
            };
            schedule test2 {
                inherit test;
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test2.classes', out.schedules.test.classes);
        });
        it('should error when the schedule doesnt exist', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
            };
            schedule test2 {
                inherit test3;
            };
            `);
            expect(() => scs.exec()).toThrow('Schedule test3 doesnt exist!');
        });
        it('should error when there are no schedules', () => {
            const scs = new SCS(`
            schedule test {
                inherit test3;
            };
            `);
            expect(() => scs.exec()).toThrow('No schedules in file!');
        });
    });
    it('description', () => {
        const scs = new SCS(`
        schedule test {
            description "this is a test";
        };
        `);
        const out = scs.exec();
        expect(out).toHaveProperty('schedules.test.description', 'this is a test');
    });
    it('info', () => {
        const scs = new SCS(`
        event {
            info "this is a test";
        };
        `);
        const out = scs.exec();
        expect(out).toHaveProperty('events.0.info', 'this is a test');
    });
    it('message', () => {
        const scs = new SCS(`
        event {
            message "this is a test";
        };
        `);
        const out = scs.exec();
        expect(out).toHaveProperty('events.0.message', 'this is a test');
    });
    describe('date', () => {
        it('should add a date attribute', () => {
            const scs = new SCS(`
                date [November 21, 2022];
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('dates');
            expect(out.dates).toHaveLength(1);
            expect(out.dates[0]).toBeInstanceOf(Date);
            expect(out.dates[0].toDateString()).toBe(new Date(2022, 10, 21).toDateString());
        });
        it('should add multiple days', () => {
            const scs = new SCS(`
                date [November 21, 2022];
                date [November 22, 2022];
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('dates');
            expect(out.dates).toHaveLength(2);
            expect(out.dates[0]).toBeInstanceOf(Date);
            expect(out.dates[0].toDateString()).toBe(new Date(2022, 10, 21).toDateString());
            expect(out.dates[1]).toBeInstanceOf(Date);
            expect(out.dates[1].toDateString()).toBe(new Date(2022, 10, 22).toDateString());
        });
    });
    describe('from', () => {
        //describe("from event")
    });
});
