/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dias = Number(lines.shift())
var calen = {ano:0,mes:0,dia:0}

do{
    if(dias >= 365){
        calen.ano += 1
        dias -= 365
    }
    else if (dias >= 30){
        calen.mes += 1
        dias -= 30
        if(calen.mes >= 12){
            calen.ano += 1
            calen.mes -= 12
        }
    }
    else if(dias < 30){
        calen.dia += dias
        dias = 0
    }
}while(dias != 0)

console.log(`${calen.ano} ano(s)`)
console.log(`${calen.mes} mes(es)`)
console.log(`${calen.dia} dia(s)`)