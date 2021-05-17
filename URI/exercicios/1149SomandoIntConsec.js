/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ")
var A = Number(entrada[0])
for(var c = 1;c<=entrada.length;c++){
    if(entrada[c]>0){
        var N = Number(entrada[c])
    }
}
var soma = 0

for(var c = N-1;c>=0;c--){
    soma += (A+c)
}
console.log(soma)