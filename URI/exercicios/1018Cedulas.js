/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = Number(lines.shift())
var notas = {nota1:0,nota2:0,nota5:0,nota10:0,nota20:0,nota50:0,nota100:0}
temp = num

do{
    if(num >= 100){
        notas.nota100 += 1   
        num -= 100
    }
    else if(num >= 50){
        notas.nota50 += 1
        num -= 50
    }
    else if(num >= 20){
        notas.nota20 += 1
        num -= 20
    }
    else if(num >= 10){
        notas.nota10 += 1
        num -= 10
    }
    else if(num >= 5){
        notas.nota5 += 1
        num -= 5
    }
    else if(num >= 2){
        notas.nota2 += 1
        num -= 2
    }
    else {
        notas.nota1 += 1
        num -= 1
    }
    
    
}while(num>0)
console.log(temp)
console.log(`${notas.nota100} nota(s) de R$ 100,00`)
console.log(`${notas.nota50} nota(s) de R$ 50,00`)
console.log(`${notas.nota20} nota(s) de R$ 20,00`)
console.log(`${notas.nota10} nota(s) de R$ 10,00`)
console.log(`${notas.nota5} nota(s) de R$ 5,00`)
console.log(`${notas.nota2} nota(s) de R$ 2,00`)
console.log(`${notas.nota1} nota(s) de R$ 1,00`)