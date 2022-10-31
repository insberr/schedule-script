start = statement *

statement = comment / command

comment = "//" ((" "+)? text (" "+)?)+ "\n" {}
 

text = [a-z0-9]i+ { return text() }

command = statment:text (" " text)* ";" { return {statement} }
