/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Km = Number(lines.shift())
var litros = parseFloat(lines.shift())

var res = (Km/litros).toFixed(3)
console.log(`${res} km/l`)