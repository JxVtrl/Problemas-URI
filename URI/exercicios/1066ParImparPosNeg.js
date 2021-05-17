
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entradas = []
var par = 0
var impar = 0
var pos = 0
var neg = 0

for(var c = 1; c <= 5; c++){
    entradas.push(Number(lines.shift()))
    if(entradas[c-1]%2 == 0){
        par++
    }
    else if(entradas[c-1]%2 != 0){
        impar++
    }
    if(entradas[c-1] > 0){
        pos++
    }
    else if(entradas[c-1] < 0){
        neg++
    }
    
}
console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${pos} valor(es) positivo(s)`)
console.log(`${neg} valor(es) negativo(s)`)
