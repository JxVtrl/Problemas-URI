/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift()

for(var c = 1; c<=10000;c++){
    if(c%entrada==2){
        console.log(c)
    }
}