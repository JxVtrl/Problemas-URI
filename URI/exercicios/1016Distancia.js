/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var D = Number(lines.shift())
var T = (60 * D) / 30;
console.log(`${T} minutos`)