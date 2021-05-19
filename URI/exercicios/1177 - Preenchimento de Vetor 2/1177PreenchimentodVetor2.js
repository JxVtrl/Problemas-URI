/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = Number(lines.shift())
var N = []
for(var c = 0;c<1000;0){
    for(var n = 0;n<entrada;n++){
        N.push(n)
        c++  
    }  
}
for(var z = 0;z<1000;z++){
    console.log(`N[${z}] = ${N[z]}`)
}