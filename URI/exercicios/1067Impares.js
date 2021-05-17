/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = Number(lines.shift())

for(c=1;c<=entrada;c++){
    if(c%2 != 0){
    console.log(`${c}`)
    }
}