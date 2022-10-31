start = prog:statement* { return prog.filter((p) => p) }
ws "whitespace" = [ \t\n\r]*
statement = ws v:(comment / multilinecomment / block / command ) ws { return v }

comment = "//" [^\n]* "\n" { return null }
multilinecomment = "/*" [^*]* "*"+ ([^/*] [^*]* "*"+)* "/" { return null }

/*
string "string"
  = quotation_mark chars:char* quotation_mark { return chars.join(""); }
*/
char
  = unescaped
  / escape
    sequence:(
        '"'
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

unescaped
  = [^\0-\x1F\x22\x5C]

DIGIT  = [0-9]
HEXDIG = [0-9a-f]i

text = [0-9a-z:]i+ { return text() }
bracketed = "[" j:[0-9a-z, :]i+ "]" { return j.join("") }
eol = ";" "\n"?

quotedarg = "\"" d:char* "\"" { return d.join("") }

block = "{" "\n"? state:statement+ "\n"? "}" { return state.filter(s => s) }

arg = block / quotedarg / text / bracketed
command = statement:text args:(ws arg)* eol { return {statement, args:args.map(r => r[1])} }
