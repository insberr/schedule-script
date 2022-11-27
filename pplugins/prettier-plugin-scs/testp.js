const { readFileSync, writeFileSync } = require('fs');
const prettier = require('prettier');

const code = readFileSync('../../examples/main.ex.scs', 'utf-8');
//console.log(code)
const formatted = prettier.format(code, {
    parser: 'scsParser',
    plugins: ['.'],
});
writeFileSync('test.scs', formatted);
