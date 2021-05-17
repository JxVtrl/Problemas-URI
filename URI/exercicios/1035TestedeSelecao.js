/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeros = (lines.shift()).split(" ", 4)
var A = numeros[0]
var B = numeros[1]
var C = numeros[2]
var D = numeros[3]

if(B > C && D > A && (C+D) > (A+B) && C > 0 && D > 0 && A%2 == 0){
    console.log("Valores aceitos")
}
else{
    console.log("Valores nao aceitos")
}