/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtdNum = Number(lines.shift())
do{
    var entrada = Number(lines.shift())
    var dois = 2
    for(var c=1;c<=entrada;c++){
        if(entrada%c==0){
            dois--
        }
    }
    if(dois==0){
        console.log(`${entrada} eh primo`)
    }
    else{
        console.log(`${entrada} nao eh primo`)
    }
    qtdNum--
}while(qtdNum>0)