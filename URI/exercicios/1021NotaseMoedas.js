/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var num = Number(lines.shift())
var notas = {nota1:0,nota2:0,nota5:0,nota10:0,nota20:0,nota50:0,nota100:0}
var moedas = {moeda1:0,moeda0_50:0,moeda0_25:0,moeda0_10:0,moeda0_05:0,moeda0_01:0}

do{
    num = num.toFixed(2)
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
    else if(num >= 1){
        notas.nota1 += 1
        num -= 1
    }
    else if(num >= 0.50){
        moedas.moeda0_50 += 1
        num -= 0.50
    }
    else if(num >= 0.25){
        moedas.moeda0_25 += 1
        num -= 0.25
    }
    else if(num >= 0.10){
        moedas.moeda0_10 += 1
        num -= 0.10
    }
    else if(num >= 0.05){
        moedas.moeda0_05 += 1
        num -= 0.05
    }
    else if(num >= 0.01){
        moedas.moeda0_01 += 1
        num -= 0.01
    }
}while(num!=0)

console.log(`NOTAS:`)
console.log(`${notas.nota100} nota(s) de R$ 100.00`)
console.log(`${notas.nota50} nota(s) de R$ 50.00`)
console.log(`${notas.nota20} nota(s) de R$ 20.00`)
console.log(`${notas.nota10} nota(s) de R$ 10.00`)
console.log(`${notas.nota5} nota(s) de R$ 5.00`)
console.log(`${notas.nota2} nota(s) de R$ 2.00`)
console.log(`MOEDAS:`)
console.log(`${notas.nota1} moeda(s) de R$ 1.00`)
console.log(`${moedas.moeda0_50} moeda(s) de R$ 0.50`)
console.log(`${moedas.moeda0_25} moeda(s) de R$ 0.25`)
console.log(`${moedas.moeda0_10} moeda(s) de R$ 0.10`)
console.log(`${moedas.moeda0_05} moeda(s) de R$ 0.05`)
console.log(`${moedas.moeda0_01} moeda(s) de R$ 0.01`)