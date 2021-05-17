/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = []
var X = Number(lines.shift())

for(var c = 1;c<=10;c++){
    console.log(`N[${c-1}] = ${X}`)
    X *= 2
}