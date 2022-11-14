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
});
