/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var par = []
var impar = []
for(var c = 0;c<15;c++){
    var entrada = Number(lines.shift())
    if(entrada%2==0){
        par.push(entrada)
        if(par.length==5){
            for(var n = 0;n<5;n++){
                console.log(`par[${n}] = ${par[n]}`)
            }
            var par = []
        }
    }
    else{
        impar.push(entrada)
        if(impar.length==5){
            for(var n = 0;n<5;n++){
                console.log(`impar[${n}] = ${impar[n]}`)
            }
            var impar = []
        }
    }
}
if(impar.length>0){
    for(var n = 0;n < impar.length;n++){
        console.log(`impar[${n}] = ${impar[n]}`)
    }
}
if(par.length>0){
    for(var n = 0;n < par.length;n++){
        console.log(`par[${n}] = ${par[n]}`)
    }
}