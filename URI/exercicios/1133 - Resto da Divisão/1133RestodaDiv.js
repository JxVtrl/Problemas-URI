/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n1 = Number(lines.shift())
var n2 = Number(lines.shift())

if(n2<n1){
    var temp = n1
    n1 = n2
    n2 = temp
}
for(var c=n1+1;c<n2;c++){
    if(c%5 == 2 || c%5 == 3){
        console.log(c)           
    }
}
