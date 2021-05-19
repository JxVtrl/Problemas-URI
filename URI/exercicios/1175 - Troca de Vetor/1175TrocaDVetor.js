/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = []

for(var c = 19;c>=0;c--){
    var entrada = Number(lines.shift())
    N.push(entrada)
}
for(var n = 0;n<=19;n++){
console.log(`N[${n}] = ${N[19-n]}`)
}