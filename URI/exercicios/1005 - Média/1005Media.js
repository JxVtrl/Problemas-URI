/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())

var MEDIA = (((3.5*A)+(7.5*B))/11.0).toFixed(5)

console.log(`MEDIA = ${MEDIA}`)