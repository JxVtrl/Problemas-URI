/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = Number(lines.shift())

for(var c = 0; c<=11;c++){
    if((entrada + c)%2!=0){
        console.log(`${entrada+c}`)
    }
}