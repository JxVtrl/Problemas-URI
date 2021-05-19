/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd = Number(lines.shift())

for(var c = 0;c<qtd;c++){
    var notas = lines.shift().split(" ", 3)
    for(var n = 0; n<3;n++){
        if(notas[n]==notas[0]){
            var n1 = notas[0]*2
        }
        else if(notas[n]==notas[1]){
            var n2 = notas[1]*3
            
        }
        else if(notas[n]==notas[2]){
            var n3 = notas[2]*5
        }
        var media = (n1+n2+n3)/10 
    }
    console.log(`${media.toFixed(1)}`)
}