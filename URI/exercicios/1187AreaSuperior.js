/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var op = lines.shift()
var M = []
for(var l=0;l<12;l++){
    M[l] = new Array(12)
    for(var c = 0;c<12;c++){
        M[l][c] = Number(lines.shift())
    }
}
var soma = 0
var limMin = 1
var limMax = 10
for(var l = 0;l<=4;l++){
    for(var c = limMin;c<=limMax;c++){
        soma += M[l][c]
    }
    limMin++
    limMax--
}
if(op=='S'){
    console.log(soma.toFixed(1))
}
else if(op == 'M'){
    console.log((soma/30).toFixed(1))
}