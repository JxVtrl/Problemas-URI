/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtdNum = Number(lines.shift())
do{
    var entrada = Number(lines.shift())
    var soma = 0
    for(var c=1;c<entrada;c++){
        if(entrada%c==0){
            soma += c
        }
    }
    if(soma==entrada){
    console.log(`${entrada} eh perfeito`)
    }
    else{
        console.log(`${entrada} nao eh perfeito`)
    }
    qtdNum--
}while(qtdNum>0)