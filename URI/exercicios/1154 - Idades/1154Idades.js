/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var termino = false
var soma = 0
var c = 0
do{
    entrada = Number(lines.shift())
    if(entrada<0){
        termino = true
    }
    else{
        soma += entrada
        c++
    }
}while(termino==false)
var media = soma/c
console.log(media.toFixed(2))