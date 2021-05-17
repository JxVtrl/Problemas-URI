/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var NOME = lines.shift('')

var SALARIO = Number(lines.shift())
var VENDAS = Number(lines.shift())

var total = ((VENDAS * 15/100)+SALARIO).toFixed(2)
console.log(`TOTAL = R$ ${total}`)