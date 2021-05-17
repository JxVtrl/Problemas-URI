/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var maior = 0
var posicao = 0

for(var c = 1;c<=100;c++){
    var entrada = Number(lines.shift())
    if(entrada > maior){
        maior = entrada
        posicao = c
    }
}
console.log(maior)
console.log(posicao)