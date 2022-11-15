start = prog:statement* { return prog.filter((p) => p) }
ws "whitespace" = [ \t\n\r]*
statement = ws v:(comment / multilinecomment / block / command ) ws { return v }

comment "comment" = "//" d:[^\n]* "\n"? { return {statement: "comment", "comment":d.join(''), "args": [],  location: location() } }
multilinecomment "multiline comment" = "/*" d:[^*]* "*"+ ([^/*] [^*]* "*"+)* "/" { return {statement: "multicomment", "comment":d.join(''), "args": [],  location: location() } }

/*
string "string"
  = quotation_mark chars:char* quotation_mark { return chars.join(""); }
*/
charD
  = unescapedDouble
  / escape
    sequence:(
        '"'
      / "'"
      / "\\"
      / "/"
      / "b" { return "\b"; }
      / "f" { return "\f"; }
      / "n" { return "\n"; }
      / "r" { return "\r"; }
      / "t" { return "\t"; }
      / "u" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {
          return String.fromCharCode(parseInt(digits, 16));
        }
    )
    { return sequence; }

charS
  = unescapedSingle
  / escape
    sequence:(
        "'"
      / "\""
      / "\\"
      / "/"
      / "b" { return "\b"; }
      / "f" { return "\f"; }
      / "n" { return "\n"; }
      / "r" { return "\r"; }
      / "t" { return "\t"; }
      / "u" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {
          return String.fromCharCode(parseInt(digits, 16));
        }
    )
    { return sequence; }

escape
  = "\\"

unescapedDouble
  = [^\0-\x1F\x22\x5C]
unescapedSingle
  = [^\0-\x1F\x27\x5C]

DIGIT  = [0-9]
HEXDIG = [0-9a-f]i

text "text" = [0-9a-z:()\-$]i+ { return text() } // add the rest of the symbols?
bracketed "bracketed text" = "[" j:[0-9a-z$\-, :]i+ "]" { return j.join("") }
eol "semicolon" = ";"

quotedargDouble = "\"" d:charD* "\"" { return d.join("") }
quotedargSingle = "'" d:charS* "'" { return d.join("") }

block "block" = "{" "\n"? state:statement+ "\n"? "}" { return state.filter(s => s) }

arg "argument" = (o:block { return { type: "block", data: o } }) / (o:(quotedargDouble/quotedargSingle) { return {type: "quote", data: o } }) / (o:text { return {type: "text", data: o } }) / (o:bracketed { return {type: "bracket", data: o } })
command "command" = statement:text args:(ws arg)* eol [ ]* com:comment? { return {statement, args:args.map(r => r[1]), comment:com,  location: location()} }
