/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ", 2)
var h1 = Number(entrada[0])
var h2 = Number(entrada[1])

if(h1 == 0 && h2 == 0){
    var tempo = 24
}
else if(h2 > h1){
    var tempo = h2 - h1
}
else{
    var tempo = (24-h1)+h2
}

console.log(`O JOGO DUROU ${tempo} HORA(S)`)