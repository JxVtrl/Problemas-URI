/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n1 = Number(lines.shift())
var n2 = Number(lines.shift())
var soma = 0
if(n2<n1){
    var temp = n1
    n1 = n2
    n2 = temp
}
for(var c=n1;c<=n2;c++){
    if(c%13 != 0){
        soma += c        
    }
}
console.log(soma)