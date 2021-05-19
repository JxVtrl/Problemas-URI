/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift())
const pi = 3.14159

var volume = Number((4/3)*pi*(R**3)).toFixed(3)
console.log(`VOLUME = ${volume}`)