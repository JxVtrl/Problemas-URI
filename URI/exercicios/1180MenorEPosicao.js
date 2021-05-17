/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = Number(lines.shift())
var string = lines.shift().split(" ", entrada)
var menor = string[0]
var pos = 0

for(var c = 0;c<string.length;c++){
    if(string[c]<menor){
        menor = Number(string[c])
        pos = c
    }
}
console.log(`Menor valor: ${menor}`)
console.log(`Posicao: ${pos}`)