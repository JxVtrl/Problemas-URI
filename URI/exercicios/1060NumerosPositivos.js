/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 0
for(var c = 0;c<=6;c++){
    var num = Number(lines.shift())
    if(num > 0){
        n++
    }
}
console.log(`${n} valores positivos`)