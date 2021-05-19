/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())

var MEDIA = (((2*A)+(3*B)+(C*5))/10).toFixed(1)
console.log(`MEDIA = ${MEDIA}`)