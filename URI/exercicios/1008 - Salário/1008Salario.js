/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = lines.shift()
var horas = lines.shift()
var valor = parseFloat(lines.shift())

var SALARIO = (horas * valor).toFixed(2)

console.log(`NUMBER = ${numero}`)
console.log(`SALARY = U$ ${SALARIO}`)