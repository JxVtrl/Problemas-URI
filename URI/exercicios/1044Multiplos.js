/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var ent = lines.shift().split(" ", 2)
var n1 = Number(ent[0])
var n2 = Number(ent[1])
if(n1 > n2){
    var n3 = n1%n2
}
else{
  var n3 = n2%n1  
}

if(n3 == 0){
    console.log("Sao Multiplos")
}
else{
    console.log("Nao sao Multiplos")
}