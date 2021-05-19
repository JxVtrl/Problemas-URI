/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var item = (lines.shift('')).split(" ", 3)
var item2 = (lines.shift('')).split(" ", 3)

var PAGAR = (item[1]*item[2]+item2[1]*item2[2]).toFixed(2)
console.log(`VALOR A PAGAR: R$ ${PAGAR}`)