/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = []
var total = 0
var pos = 0

for(c=1; c<=6; c++){
    entrada.push(Number(lines.shift()))
    if(entrada[c-1] > 0){
        pos++
        total += entrada[c-1]
    }
}
console.log(`${pos} valores positivos`)
console.log(`${(total/pos).toFixed(1)}`)