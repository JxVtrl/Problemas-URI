/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159
var raio = parseFloat(lines.shift())
var area = (pi * raio**2).toFixed(4)

console.log(`A=${area}`)