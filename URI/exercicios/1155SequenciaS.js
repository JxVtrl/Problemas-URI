/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var s = 0
for(var c = 1;c<=100;c++){
    s += (1/c)   
}
console.log(s.toFixed(2))