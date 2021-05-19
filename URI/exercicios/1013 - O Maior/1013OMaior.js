/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ", 3)
var A = parseFloat(entrada[0])
var B = parseFloat(entrada[1])
var C = parseFloat(entrada[2])

if(A > B){
    var maior = A
    if(maior < C){
        var maior = C
    }
}
else if(A < B){
    var maior = B
    if(maior < C){
        var maior = C
    }
}
else if(A == B){
    var maior = A
    if(maior < C){
        var maior = C
    }
}

console.log(`${maior} eh o maior`)