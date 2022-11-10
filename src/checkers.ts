import { LintLevel, Statement } from './types';

export type Checker = (statement: Statement, parent?: Statement) => { message: string; level: LintLevel } | void;

function combine(checks: Checker[]): Checker {
    return (statement: Statement, parent?: Statement) => {
        for (const check of checks) {
            const err = check(statement, parent);
            if (err) {
                return err;
            }
        }
    };
}

function parenting(parents: { [key: string]: Checker }): Checker {
    return (statement: Statement, parent?: Statement) => {
        let parentStatement: string;
        if (!parent) {
            parentStatement = 'root';
        } else {
            parentStatement = parent.statement;
        }
        if (!Object.keys(parents).includes(parentStatement)) {
            return {
                message: `Statement ${statement.statement} must be inside ${Object.keys(parents).join(', ')}, not ${parentStatement}`,
                level: LintLevel.error,
            };
        } else {
            return parents[parentStatement](statement, parent);
        }
    };
}

function simple(args: args[]) {
    return combine([hasAmtOfArgs(args.length), ...args.map((n, i) => argumentOfType(i, n))]);
}

function formatType(t: string): string {
    return (
        {
            text: 'text',
            block: 'block',
            quote: 'quoted string',
            bracket: 'bracketed string',
        }[t] || t
    );
}

type args = 'quote' | 'text' | 'block' | 'bracket';

function argumentOfType(argumentIndex: number, type: args | args[]): Checker {
    const ot = typeof type == 'string' ? [type] : type;
    return (statement: Statement, parent?: Statement) => {
        if (!ot.includes(statement.args[argumentIndex].type)) {
            return {
                level: LintLevel.error,
                message: `Argument ${argumentIndex} of ${statement.statement} must be any of (${ot
                    .map((t) => formatType(t))
                    .join(', ')}), not a ${formatType(statement.args[argumentIndex].type)}`,
            };
        }
    };
}
function hasAmtOfArgs(amt: number) {
    return (statement: Statement, parent?: Statement) => {
        if (statement.args.length != amt) {
            return { message: `Statement ${statement.statement} must have ${amt} arguments, not ${statement.args.length}`, level: LintLevel.error };
        }
    };
}

export const checkers = new Map<string, Checker>()
    .set(
        'schedule',
        parenting({
            root: simple(['text', 'block']),
            event: simple(['text']),
        })
    )
    .set(
        'term',
        parenting({
            terms: simple(['text', 'bracket', 'bracket']),
        })
    )
    .set(
        'info',
        parenting({
            event: simple(['quote']),
        })
    )
    .set(
        'description',
        parenting({
            schedule: simple(['quote']),
        })
    )
    .set('root', () => {
        return { message: 'reserved statement: root', level: LintLevel.error };
    })
    .set('call', (s, p) => {
        if (s.args.length == 0) {
            return { message: 'Statement call requires 1+ arguments', level: LintLevel.error };
        }
    })
    .set('function', (s, p) => {
        if (s.args.length < 2 || s.args.length > 3) {
            return { message: 'Statement call requires 2-3 arguments', level: LintLevel.error };
        }
        if (s.args.length == 2) {
            return simple(['text', 'block'])(s, p);
        } else {
            return simple(['text', 'bracket', 'block'])(s, p);
        }
    })
    .set('class', simple(['bracket', 'bracket']))
    .set('terms', simple(['block']))
    .set('lunches', simple(['block']))
    .set('only', simple(['text', 'text']))
    .set('teacher', simple(['bracket', 'text', 'text']))
    .set('set', simple(['text', 'text']))
    .set('config', simple(['text', 'text']));
