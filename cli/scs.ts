import { SCS } from "../src/scs"
const args = process.argv.slice(2)


const commands = [

    "prettyMany",
    "pretty",

    "minifyMany",
    "minify",

    "exec",
    "parse"
]

function usage() {
    console.log("SCS-CLI v0.0.0")
    console.log("Usage:")
    console.log()
    console.log("scs prettyMany [...files]")
    console.log("prettifies many files in place")
    console.log()
    console.log("scs pretty <infile> <outfile>")
    console.log("prettify a single file")
    console.log()
    console.log("scs minifyMany [...files]")
    console.log("minifies many files in place")
    console.log()
    console.log("scs minify <infile> <outfile>")
    console.log("minifies a single file")
    console.log()
    console.log("scs exec <infile> <outfile> [...args]")
    console.log("executes infile, writes the output context to outfile. specify args in json")
    console.log("example: scs exec in.scs out.json {\"grade\": 10, \"name\": \"wecky smecky\"}")
    console.log()
    console.log("scs parse <infile> <outfile>")
    console.log("parses infile and outputs the parsed tree to outfile")
    console.log()
}

async function main(command?: string) {
    if (!commands.includes(command || "undefined")) {
        usage()
        return;
    }
}

main(args.pop())