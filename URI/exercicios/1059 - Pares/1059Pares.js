/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(var c = 1;c<=100;c++){
    if(c%2==0){
        console.log(c)
    }
}