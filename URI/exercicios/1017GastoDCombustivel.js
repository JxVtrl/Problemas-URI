/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = Number(lines.shift())
var velo = Number(lines.shift())

var dis = velo * tempo
var litros = (dis/12).toFixed(3)
console.log(litros)