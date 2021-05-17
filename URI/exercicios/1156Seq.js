/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var den = 1
var s = 0
for(var num = 1;num<=39;num+2){
    s += num/den
    den = den*2
    num = num+2
}
console.log(s.toFixed(2))