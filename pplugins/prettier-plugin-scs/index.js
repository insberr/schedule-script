const { convertTypeAcquisitionFromJson } = require('typescript');


const SCS = require('../..').SCS;

const {
    builders: { group, indent, join, hardline, softline },
} = require('prettier').doc;
const line = hardline;

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
        locEnd
    },
};
/** @arg {import('prettier').AstPath<import("../..").Block>} path */
function print(path, options, print) {
    let top = false
    let node = path.getValue();
    if (node.statement == "main") {
        top = true
        node = node.args[0].data
    }
    if (Array.isArray(node)) {
        // this is a block
        if (top) {
            const printed = node.map((_,i) => print(["args",0,"data",i]))
            return join(line,printed)
        }
        const printed = path.map(print)
        const dt = group([indent(group(["{",line,join(line,printed)])),line,"}"])
        return dt
    } else {
        // this is a statement
        if (node.statement == 'comment' || node.statement == 'multicomment') {
            if (node.statement == 'comment') {
                return '//' + node.args.map((r) => r.data).join('');
            } else { 
                return group([indent(group(['/*', join(line,node.args.map((r) => r.data).join('').trim().split("\n").map(r => r.trim()))])), "*/"])
            }
        }
        /** @arg {import("../..").Arg[]} args */
        function formatArgs(args) {
            const out = [];
            //console.log(args)
            //console.log(args)
            args.forEach((e, i) => {
                switch (e.type) {
                    case 'block':
                        out.push(group([print(['args', i, 'data'])]))
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
        return group([group([join(' ', [node.statement, ...formatArgs(node.args)])]), ';', formatComment(node.comment)]);
    }
}

module.exports.printers = {
    'scs-ast': {
        print,
        preprocess(a) {
            return {statement: "main", args: [{type:"block", data:a}]}
        }
    },
};
