/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var termina = false
var totGre = 0
var totInt = 0
var empate = 0
var c = 0
do{
    var entrada = lines.shift().split(" ", 2)
    c++
    if(entrada[0]==entrada[1]){
        empate++
    }
    else if(entrada[0]> entrada[1]){
        totInt++
    }
    else if(entrada[0]<entrada[1]){
        totGre++
    }
    console.log("Novo grenal (1-sim 2-nao)")
    var confirmacao = Number(lines.shift())
    if(confirmacao == 2){
       termina = true 
    }
    else{
        termina = false
    }
    
}while(termina==false)
    console.log(`${c} grenais`)
    console.log(`Inter:${totInt}`)
    console.log(`Gremio:${totGre}`)
    console.log(`Empates:${empate}`)
    if(totInt>totGre){
        console.log("Inter venceu mais")
    }
    else if(totInt<totGre){
        console.log("Gremio venceu mais")
    }
    else{
        console.log("Nao houve vencedor")
    }