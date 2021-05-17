/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var parar = false
do{
var entrada = Number(lines.shift())
    if(entrada==0){
        parar = true
    }
    else{ 
        if(entrada%2===0){
            var soma = entrada
            for(var c = 0; c<=3;c++){
                entrada += 2
                soma += entrada
            }
        }
        else{
            entrada += 1
            var soma = entrada
            for(var c = 0; c<=3;c++){
                entrada += 2
                soma += entrada
            }
        }
    }
console.log(soma)
}while(parar!=true)