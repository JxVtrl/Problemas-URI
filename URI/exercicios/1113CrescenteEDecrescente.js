/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var termino = false
do{
var entrada = lines.shift().split(" ", 2)
var n1 = Number(entrada[0])
var n2 = Number(entrada[1])
if(n1 == n2){
    termino = true
}
else{
    if(n1>n2){
        console.log('Decrescente')
    }
    else if(n1<n2){
        console.log('Crescente')
    }
}
}while(termino == false)