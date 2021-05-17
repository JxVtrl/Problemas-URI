/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = Number(lines.shift())
for(var c = 1;c<=10;c++){
    console.log(`${c} x ${entrada} = ${entrada*c}`)
}