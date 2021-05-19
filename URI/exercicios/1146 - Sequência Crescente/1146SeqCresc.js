/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var finalizar = false

do{
    var entrada = Number(lines.shift())
    if(entrada == 0){
        finalizar = true  
    }
    var final = ''
    for(var c = 1;c<=entrada;c++){
        if(c==entrada){
            final += `${c}`
            console.log(final)
        }
        else if(c<entrada){
            final += `${c} `
        }
    }
    
}while(finalizar == false)
