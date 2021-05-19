/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd = Number(lines.shift())
for(var c = 0;c<qtd;c++){
    var teste = (lines.shift()).split(" ")
    
    if(Number(teste[1])<Number(teste[0])){
        var n1 = Number(teste[1])
        var n2 = Number(teste[0])
    }
    else if (Number(teste[1])>Number(teste[0])){
        var n1 = Number(teste[0])
        var n2 = Number(teste[1])
    }
    var soma = 0
    for(var n = n1+1; n<n2; n++){
        if(n%2!=0){
            soma += n
        }
    }
    console.log(soma)
}