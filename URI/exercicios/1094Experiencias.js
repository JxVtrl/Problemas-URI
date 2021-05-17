/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var linhas = 1
var C = 0
var R = 0
var S = 0
var qtd_total = 0
for(var c = 0;c<linhas;c++){
    var teste = ('10 C').split(" ", 2)
    if(teste[1]=='C'){
        C += Number(teste[0]) 
        qtd_total += Number(teste[0])
    }
    else if(teste[1]=='R'){
        R += Number(teste[0])
        qtd_total += Number(teste[0])
    }
    else if(teste[1]=='S'){
        S += Number(teste[0])
        qtd_total += Number(teste[0])
    }
}
var percem_C = qtd_total/C
var percem_R = qtd_total/R
var percem_S = qtd_total/S

console.log(`Total: ${qtd_total} cobaias`)
console.log(`Total de coelhos: ${C}`)
console.log(`Total de ratos: ${R}`)
console.log(`Total de sapos: ${S}`)
console.log(`Percentual de coelhos: ${percem_C.toFixed(2)} %`)
console.log(`Percentual de ratos: ${percem_R.toFixed(2)} %`)
console.log(`Percentual de sapos: ${percem_S.toFixed(2)} %`)