/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var casos = Number(lines.shift())
for(var c = 1;c<=casos;c++){
    var entrada = lines.shift().split(" ", 2)
    var X = Number(entrada[0])
    var Y = Number(entrada[1])
    var soma = 0
    if(X%2==0){
    do{
        for(var n = X+1;Y>0;n++){
            if(n%2!=0){
                soma += n
                Y--
            }
        }
    }while(Y>0)
    console.log(soma)
    }
    else if(X%2!=0){
    do{
        for(var n = X;Y>0;n++){
            if(n%2!=0){
                soma += n
                Y--
            }
        }
    }while(Y>0)
    console.log(soma) 
    }
}