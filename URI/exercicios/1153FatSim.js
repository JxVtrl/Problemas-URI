/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var inicio = Number(lines.shift())
var result = inicio
for(var temp = inicio-1;temp>1;temp--){
    var c = inicio-temp
    result += result*(c)
}
console.log(result)