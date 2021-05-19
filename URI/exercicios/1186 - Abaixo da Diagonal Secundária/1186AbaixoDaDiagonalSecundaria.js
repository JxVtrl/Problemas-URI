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
if(op == 'S'){
    var lim = 10
    var soma = 0
    for(var l = 1;l<12;l++){
        for(var c = 11;c>lim;c--){
            soma+= M[l][c]
        }
        lim--
    }
    console.log(soma.toFixed(1))
}
else if(op == 'M'){
    var lim = 10
    var soma = 0
    for(var l = 1;l<12;l++){
        for(var c = 11;c>lim;c--){
            soma+= M[l][c]
        }
        lim--
    }
    console.log((soma/66).toFixed(1))
}