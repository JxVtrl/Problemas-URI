/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = Number(lines.shift())
var tempo = {horas:0,minutos:0,segundos:0}

do{
    if (N >= 60){
        N -= 60
        tempo.minutos += 1
        if(tempo.minutos >= 60){
                tempo.minutos -= 60
                tempo.horas += 1
        }
    }
    else{
        tempo.segundos += N
        N = 0
    }
}while (N != 0)

console.log(`${tempo.horas}:${tempo.minutos}:${tempo.segundos}`)