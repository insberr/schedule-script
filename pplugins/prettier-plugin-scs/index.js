const SCS = require('../..').SCS;

const {
    builders: { group, indent, join, line, softline },
} = require('prettier').doc;

module.exports.languages = [
    {
        // The language name
        name: 'Schedule Script',
        // Parsers that can parse this language.
        // This can be built-in parsers, or parsers you have contributed via this plugin.
        parsers: ['scsParser'],
        extensions: ['.scs'],
    },
];

function parse(text, parsers, options) {
    return new SCS(text).parsed;
}

function locStart(node) {
    return node.location.start.offset;
}
function locEnd(node) {
    return node.location.end.offset;
}

module.exports.parsers = {
    scsParser: {
        parse,
        // The name of the AST that
        astFormat: 'scs-ast',
        locStart,
        locEnd,
    },
};
/** @arg {import('prettier').AstPath<import("../..").Block>} path */
function print(path, options, print) {
    const node = path.getValue();
    if (Array.isArray(node)) {
        // this is a block
        const printed = path.map(print);
        return indent(join(line, printed));
    } else {
        // this is a statement
        if (node.statement == 'comment' || node.statement == 'multicomment') {
            if (node.statement == 'comment') {
                return '//' + node.args.map((r) => r.data).join('');
            } else {
                return '/*' + node.args.map((r) => r.data).join('') + '*/';
            }
        }
        /** @arg {import("../..").Arg[]} args */
        function formatArgs(args) {
            const out = [];
            //console.log(args)
            args.forEach((e, i) => {
                switch (e.type) {
                    case 'block':
                        out.push(join(line, ['{', print(['args', i, 'data']), '}']));
                        break;
                    case 'text':
                        out.push(e.data);
                        break;
                    case 'quote':
                        out.push(`'${e.data}'`);
                        break;
                    case 'bracket':
                        out.push(`[${e.data}]`);
                }
            });
            return out;
        }
        //console.log(node)
        const formatComment = (comment) => {
            return comment != null ? ` //${comment.args.map((r) => r.data).join('')}` : '';
        };
        //console.log(formatComment(node.comment))
        return group([indent(group([join(' ', [node.statement, ...formatArgs(node.args)])])), ';', formatComment(node.comment), line]);
    }
}

module.exports.printers = {
    'scs-ast': {
        print,
    },
};
