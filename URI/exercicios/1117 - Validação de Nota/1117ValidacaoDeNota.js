/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dois = 2
var termina = false
var num = []
var media = 0
do{
    var entrada = Number(lines.shift())
    if(entrada>=0 && entrada<=10){
        dois--
        num.push(entrada)
        
        if(dois == 0){
            termina = true
        }
    }
    else if(entrada<0 || entrada>10){
        console.log("nota invalida")
    }
    
}while(termina == false)
media = (Number(num[0])+Number(num[1]))/2
console.log(`media = ${media.toFixed(2)}`)