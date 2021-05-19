/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd = Number(lines.shift())

for(var c =0;c<qtd;c++){
    var entrada = lines.shift().split(" ", 2)
    var n1 = entrada[0]
    var n2 = entrada[1]
    if(n2 == 0){
        console.log("divisao impossivel")
    }
    else {
        var n3 = (n1/n2).toFixed(1)
        console.log(`${n3}`)
    } 
}