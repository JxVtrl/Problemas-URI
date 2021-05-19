/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var termino = false
do{
    var entrada = lines.shift()
    if(entrada == 2002){
        console.log('Acesso permitido')
        termino = true
    }
    else{
        console.log('Senha Invalida')
    }
}while(termino == false)