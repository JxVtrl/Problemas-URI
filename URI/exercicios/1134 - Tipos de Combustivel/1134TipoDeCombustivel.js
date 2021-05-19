/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = 0
var G = 0
var D = 0
var saida = 0
do{
var entrada = Number(lines.shift())
switch(entrada){
    case 1:
        A++
        break
    case 2:
        G++
        break
    case 3:
        D++
        break
    case 4:
        console.log("MUITO OBRIGADO")
        console.log(`Alcool: ${A}`)
        console.log(`Gasolina: ${G}`)
        console.log(`Diesel: ${D}`)
        saida = 1
        break
    default:
    break      
}
}while(saida==0)