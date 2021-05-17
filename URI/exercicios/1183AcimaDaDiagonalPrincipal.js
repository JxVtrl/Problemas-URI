/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var op = lines.shift()
var M = []
for(var l = 0;l<12;l++){
    M[l] = new Array(12)
    for(var c = 0;c<12;c++){
        M[l][c] = Number(lines.shift())
    }
}
if(op == 'S'){
    var soma = 0
    for(var lin = 0;lin<12;lin++){
      for(var n = lin+1;n<12;n++){
        soma += Number(M[lin][n])
      }
    }
    console.log(soma.toFixed(1))
}
else if(op == 'M'){
    var soma = 0
    for(var lin = 0;lin<12;lin++){
      for(var n = lin+1;n<12;n++){
        soma += Number(M[lin][n])
      }
    }
    var media = soma/66
    console.log(media.toFixed(1))
}