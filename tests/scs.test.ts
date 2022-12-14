import { isAfter, isBefore, isSameDay } from 'date-fns';
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
            expect(out).toHaveProperty(
                'schedules.test.classes.0.type',
                'period'
            );
            expect(out).toHaveProperty('schedules.test.classes.0.num', 1);
            expect(out).toHaveProperty('schedules.test.classes.0.start', {
                h: 5,
                m: 0,
                s: 0,
            });
            expect(out).toHaveProperty('schedules.test.classes.0.end', {
                h: 6,
                m: 0,
                s: 0,
            });
        });
        it('should infer type period', () => {
            const scs = new SCS(`
            schedule test {
                class [1] [5:00 to 6:00];
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty(
                'schedules.test.classes.0.type',
                'period'
            );
            expect(out).toHaveProperty('schedules.test.classes.0.num', 1);
            expect(out).toHaveProperty('schedules.test.classes.0.start', {
                h: 5,
                m: 0,
                s: 0,
            });
            expect(out).toHaveProperty('schedules.test.classes.0.end', {
                h: 6,
                m: 0,
                s: 0,
            });
        });
        it('should infer null', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty(
                'schedules.test.classes.0.type',
                'arrival'
            );
            expect(out).toHaveProperty('schedules.test.classes.0.num', null);
            expect(out).toHaveProperty('schedules.test.classes.0.start', {
                h: 5,
                m: 0,
                s: 0,
            });
            expect(out).toHaveProperty('schedules.test.classes.0.end', {
                h: 6,
                m: 0,
                s: 0,
            });
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
            expect(isSameDay(out.terms[0].start, new Date(2022, 10, 21))).toBe(
                true
            );
            expect(isSameDay(out.terms[0].end, new Date(2023, 5, 1))).toBe(
                true
            );
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
            const cl = jest.spyOn(console, 'warn').mockImplementation(() => {
                /* do nothing */
            });
            const scs = new SCS(`
            set test 1234;
            {
                only t 0;
                set test 5678;
            }
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('test', '1234');
            expect(cl).toBeCalledTimes(1);
            cl.mockRestore();
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
            expect(out).toHaveProperty('teachers.0', {
                id: 'aaaa',
                name: 'firsty',
                lunch: 1,
            });
            expect(out).toHaveProperty('teachers.1', {
                id: 'bbbb',
                name: 'secondy',
                lunch: 2,
            });
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
            expect(out).toHaveProperty(
                'schedules.test2.classes',
                out.schedules.test.classes
            );
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
        expect(out).toHaveProperty(
            'schedules.test.description',
            'this is a test'
        );
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
            expect(out.dates[0].toDateString()).toBe(
                new Date(2022, 10, 21).toDateString()
            );
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
            expect(out.dates[0].toDateString()).toBe(
                new Date(2022, 10, 21).toDateString()
            );
            expect(out.dates[1]).toBeInstanceOf(Date);
            expect(out.dates[1].toDateString()).toBe(
                new Date(2022, 10, 22).toDateString()
            );
        });
    });
    describe('from', () => {
        describe('from event', () => {
            it('should create all days between', () => {
                const scs = new SCS(`
                event {
                    from [November 12, 2022] to [January 12, 2023];
                };
                `);
                const out = scs.exec();
                expect(out).toHaveProperty('events.0.dates');
                const dates = out.events[0].dates as Date[];
                dates.forEach((d) => {
                    const start = new Date('November 12, 2022');
                    const end = new Date('January 12, 2023');
                    const isInside = isBefore(d, end) && isAfter(d, start);
                    const isEnds = isSameDay(d, start) || isSameDay(d, end);
                    expect(isInside || isEnds).toBe(true);
                });
            });
        });
        it('from lunchConfig', () => {
            const scs = new SCS(`
                lunchConfig {
                    from [period 2];
                };
                `);
            const out = scs.exec();
            expect(out).toHaveProperty('studentLunches.basedOn', 'period 2');
        });
        it('other', () => {
            const scs = new SCS(`
                set cringe {
                    from [period 2];
                };
                `);
            const out = scs.exec();
            expect(out).toHaveProperty('cringe.from', ['period 2']);
        });
    });
    describe('config', () => {
        it('should set config value', () => {
            const scs = new SCS(`
                config cringe gamer;
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('config.cringe', 'gamer');
        });
        it('should work with multilevel values', () => {
            const scs = new SCS(`
                config info {
                    set name "namey";
                    set loginToken "1234";
                };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('config.info', {
                name: 'namey',
                loginToken: '1234',
            });
        });
    });
    describe('force', () => {
        it('should set force value', () => {
            const scs = new SCS(`
                force me gamer;
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('forced.me', 'gamer');
        });
    });
    describe('passing', () => {
        it('should set passing time ', () => {
            const scs = new SCS(`
                lunchConfig {
                    passing [50 minutes];
                };
                `);
            const out = scs.exec();
            expect(out).toHaveProperty('studentLunches.passing', '50 minutes');
        });
    });
    describe('lunch', () => {
        it('should set the lunch correctly', () => {
            const scs = new SCS(`
            schedule test {
                lunch [1] [10:30 to 11:00]; 
                lunch [2] [11:00 to 11:30];
                lunch [3] [11:30 to 12:00];
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.studentLunches.lunches');
            expect(out.schedules.test.studentLunches.lunches[1]).toStrictEqual({
                start: {
                    h: 10,
                    m: 30,
                    s: 0,
                },
                end: {
                    h: 11,
                    m: 0,
                    s: 0,
                },
            });
            expect(out.schedules.test.studentLunches.lunches[2]).toStrictEqual({
                start: {
                    h: 11,
                    m: 0,
                    s: 0,
                },
                end: {
                    h: 11,
                    m: 30,
                    s: 0,
                },
            });
            expect(out.schedules.test.studentLunches.lunches[3]).toStrictEqual({
                start: {
                    h: 11,
                    m: 30,
                    s: 0,
                },
                end: {
                    h: 12,
                    m: 0,
                    s: 0,
                },
            });
        });
    });
    describe('user', () => {
        it('should check the user obj', () => {
            const scs = new SCS(`
            set test {
                set test 1234;
                {
                    user classes contains [period 1];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec({
                user: { classes: [{ type: 'period', num: 1 }] },
            });
            expect(out).toHaveProperty('test.test', '5678');
        });
        it('should check the user obj false', () => {
            const scs = new SCS(`
            set test {
                set test 1234;
                {
                    user classes contains [period 1];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec({
                user: { classes: [{ type: 'period', num: 2 }] },
            });
            expect(out).toHaveProperty('test.test', '1234');
        });
        it('shouldnt execute with no user', () => {
            const scs = new SCS(`
            set test {
                set test 1234;
                {
                    user classes contains [period 1];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('test.test', '1234');
        });
        it('shouldnt execute with a user with no classes', () => {
            const scs = new SCS(`
            set test {
                set test 1234;
                {
                    user classes contains [period 1];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec({ user: {} });
            expect(out).toHaveProperty('test.test', '1234');
        });
        it('should correctly detect with shorthand period', () => {
            const scs = new SCS(`
            set test {
                set test 1234;
                {
                    user classes contains [1];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec({
                user: { classes: [{ type: 'period', num: 1 }] },
            });
            expect(out).toHaveProperty('test.test', '5678');
        });
        it('should correctly detect with shorthand type', () => {
            const scs = new SCS(`
            set test {
                set test 1234;
                {
                    user classes contains [arrival];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec({
                user: { classes: [{ type: 'arrival', num: null }] },
            });
            expect(out).toHaveProperty('test.test', '5678');
        });
        it('should throw an error with invalid user statement', () => {
            const scs = new SCS(`
            set test {
                set test 1234;
                {
                    user e lmafo [1];
                    set test 5678;
                }
            };
            `);
            expect(() =>
                scs.exec({
                    user: { classes: [{ type: 'arrival', num: null }] },
                })
            ).toThrow();
        });
        it('should work with varargs', () => {
            const scs = new SCS(`
            set test {
                set test 1234;
                {
                    user classes contains [1] [2];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec({
                user: { classes: [{ type: 'period', num: 2 }] },
            });
            expect(out).toHaveProperty('test.test', '5678');
        });
    });
    describe('self', () => {
        it('should check the classes obj', () => {
            const scs = new SCS(`
            schedule test {
                set test 1234;
                class [period 1] [5:00 to 6:00];
                {
                    self classes contains [period 1];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.test', '5678');
        });
        it('should check the classes obj false', () => {
            const scs = new SCS(`
            schedule test {
                set test 1234;
                class [period 1] [5:00 to 6:00];
                {
                    self classes contains [period 2];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.test', '1234');
        });
        it('shouldnt execute with no classes', () => {
            const scs = new SCS(`
            schedule test {
                set test 1234;
                {
                    self classes contains [period 1];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.test', '1234');
        });
        it('should correctly detect with shorthand period', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                set test 1234;
                {
                    self classes contains [1];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.test', '5678');
        });
        it('should correctly detect with shorthand type', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
                set test 1234;
                {
                    self classes contains [arrival];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.test', '5678');
        });
        it('should throw an error with invalid user statement', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                set test 1234;
                {
                    self cringe e [1];
                    set test 5678;
                }
            };
            `);
            expect(() => scs.exec()).toThrow();
        });
        it('should correctly detect with varargs', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
                class [zero]    [6:30 to 5:00]
                set test 1234;
                {
                    self classes contains [1] [2] [3] [zero];
                    set test 5678;
                }
            };
            `);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.test', '5678');
        });
    });
    describe('day', () => {
        it('should work with one day', () => {
            const scs = new SCS(`
            set test {
                day [1] {
                    set test 1234;
                };
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('test.days.1.test', '1234');
        });
        it('should work with multiple days', () => {
            const scs = new SCS(`
            set test {
                day [1] {
                    set test 1234;
                };
                day [2] {
                    set test 5678;
                };
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('test.days.1.test', '1234');
            expect(out).toHaveProperty('test.days.2.test', '5678');
        });
        it('should work with date ranges', () => {
            const scs = new SCS(`
            set test {
                day [1] to [100] {
                    set test 1234;
                };
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('test.days');
            Object.keys(out.test.days).forEach((k: string) => {
                expect(out).toHaveProperty(`test.days.${k}.test`, '1234');
            });
        });
    });
    describe('events', () => {
        it('should pull up days', () => {
            const scs = new SCS(`
            set test {
                events {
                    day [1] {
                        set test 1234;
                    };
                    day [2] {
                        set test 5678;
                    };
                };
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('test.eventOverrides.1.test', '1234');
            expect(out).toHaveProperty('test.eventOverrides.2.test', '5678');
        });
    });
    describe('remove', () => {
        it('should remove a class', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                remove [period 1];
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes', []);
        });
        it('should leave other classes alone', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                class [period 2] [6:00 to 7:00];
                remove [period 1];
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes', [
                {
                    type: 'period',
                    num: 2,
                    start: { h: 6, m: 0, s: 0 },
                    end: { h: 7, m: 0, s: 0 },
                },
            ]);
        });
        it('should work with multiple arguments', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                class [period 2] [6:00 to 7:00];
                remove [period 1] [period 2];
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes', []);
        });
        it('should work with shorthand periods', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                class [period 2] [6:00 to 7:00];
                remove [1];
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes', [
                {
                    type: 'period',
                    num: 2,
                    start: { h: 6, m: 0, s: 0 },
                    end: { h: 7, m: 0, s: 0 },
                },
            ]);
        });
        it('should work with shorthand type', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
                remove [arrival];
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes', []);
        });
        it('should set last op correctly', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
                class [period 1] [6:00 to 7:00];
                class [period 2] [7:00 to 8:00];
                class [period 3] [8:00 to 9:00];
                class [period 4] [9:00 to 10:00];
                class [period 5] [10:00 to 11:00];
                remove [3];
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.lastOP', 3); // should be the index of the last removed element (last in the list of classes, not last in the matcher array)
        });
        it('should set last op correctly with multiple removes', () => {
            const scs = new SCS(`
            schedule test {
                class [arrival] [5:00 to 6:00];
                class [period 1] [6:00 to 7:00];
                class [period 2] [7:00 to 8:00];
                class [period 3] [8:00 to 9:00];
                class [period 4] [9:00 to 10:00];
                class [period 5] [10:00 to 11:00];
                remove [3] [4];
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.lastOP', 4); // should be the index of the last removed element (last in the list of classes, not last in the matcher array)
        });
    });
    describe('replace', () => {
        it('should replace the class', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                replace class [period 1] with {
                    class [period 2] [6:00 to 7:00];
                };
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes', [
                {
                    type: 'period',
                    num: 2,
                    start: { h: 6, m: 0, s: 0 },
                    end: { h: 7, m: 0, s: 0 },
                },
            ]);
        });
        it('should replace the class with multiple classes', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                replace class [period 1] with {
                    class [period 2] [6:00 to 7:00];
                    class [period 3] [7:00 to 8:00];
                };
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes', [
                {
                    type: 'period',
                    num: 2,
                    start: { h: 6, m: 0, s: 0 },
                    end: { h: 7, m: 0, s: 0 },
                },
                {
                    type: 'period',
                    num: 3,
                    start: { h: 7, m: 0, s: 0 },
                    end: { h: 8, m: 0, s: 0 },
                },
            ]);
        });
        it('shouldnt touch other classes', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                class [period 2] [6:00 to 7:00];
                replace class [period 1] with {
                    class [period 3] [7:00 to 8:00];
                };
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.classes', [
                {
                    type: 'period',
                    num: 3,
                    start: { h: 7, m: 0, s: 0 },
                    end: { h: 8, m: 0, s: 0 },
                },
                {
                    type: 'period',
                    num: 2,
                    start: { h: 6, m: 0, s: 0 },
                    end: { h: 7, m: 0, s: 0 },
                },
            ]);
        });
        it('should set lastOP', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                class [period 2] [6:00 to 7:00];
                replace class [period 1] with {
                    class [period 3] [7:00 to 8:00];
                };
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('schedules.test.lastOP', 0);
        });
    });
    describe('insert', () => {
        it('should insert at index', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                class [period 2] [6:00 to 7:00];
                insert { class [period 3] [7:00 to 8:00]; } at [3];
            };`);
            const out = scs.exec();
            console.log(out.schedules.test.classes);
            expect(out).toHaveProperty('schedules.test.classes', [
                {
                    type: 'period',
                    num: 1,
                    start: { h: 5, m: 0, s: 0 },
                    end: { h: 6, m: 0, s: 0 },
                },
                {
                    type: 'period',
                    num: 2,
                    start: { h: 6, m: 0, s: 0 },
                    end: { h: 7, m: 0, s: 0 },
                },
                {
                    type: 'period',
                    num: 3,
                    start: { h: 7, m: 0, s: 0 },
                    end: { h: 8, m: 0, s: 0 },
                },
            ]);
        });
        it('should insert at index between', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                class [period 2] [6:00 to 7:00];
                insert { class [period 3] [7:00 to 8:00]; } at [1];
            };`);
            const out = scs.exec();
            console.log(out.schedules.test.classes);
            expect(out).toHaveProperty('schedules.test.classes', [
                {
                    type: 'period',
                    num: 1,
                    start: { h: 5, m: 0, s: 0 },
                    end: { h: 6, m: 0, s: 0 },
                },
                {
                    type: 'period',
                    num: 3,
                    start: { h: 7, m: 0, s: 0 },
                    end: { h: 8, m: 0, s: 0 },
                },
                {
                    type: 'period',
                    num: 2,
                    start: { h: 6, m: 0, s: 0 },
                    end: { h: 7, m: 0, s: 0 },
                },
            ]);
        });
        it('should work with last operation', () => {
            const scs = new SCS(`
            schedule test {
                class [period 1] [5:00 to 6:00];
                class [period 2] [6:00 to 7:00];
                remove [1];
                insert { class [period 3] [7:00 to 8:00]; } last operation;
            };`);
            const out = scs.exec();
            console.log(out.schedules.test.classes);
            expect(out).toHaveProperty('schedules.test.classes', [
                {
                    type: 'period',
                    num: 3,
                    start: { h: 7, m: 0, s: 0 },
                    end: { h: 8, m: 0, s: 0 },
                },
                {
                    type: 'period',
                    num: 2,
                    start: { h: 6, m: 0, s: 0 },
                    end: { h: 7, m: 0, s: 0 },
                },
            ]);
        });
    });
    describe('functions', () => {
        it('should call function', () => {
            const scs = new SCS(`
            function test {
                set test 1234;
            };
            set test {
                call test;
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('test.test', '1234');
        });
        it('should call functions with args', () => {
            const scs = new SCS(`
            function test [arg] {
                set test $arg;
            };
            set test {
                call test [1234];
            };`);
            const out = scs.exec();
            expect(out).toHaveProperty('test.test', '1234');
        });
    });
});
