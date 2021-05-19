/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var termino = false
do{
    var entrada = lines.shift().split(" ", 2)
    var n1 = Number(entrada[0])
    var n2 = Number(entrada[1])
    if(n1 == 0||n2==0){
        termino = true
    }
    else if(n1>0 && n2>0){
        console.log('primeiro')
    }
    else if(n1<0 && n2>0){
        console.log('segundo')
    }
    else if(n1<0 && n2<0){
        console.log('terceiro')
    }
    else if(n1>0 && n2<0){
        console.log('quarto')
    }
}while(termino == false)