/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = Number(lines.shift())
var string = ''
for(var c = 0;c<entrada;c++){
    if((c+1)==entrada){
        string += 'Ho!'
    }
    else{
        string += 'Ho '
    }
}
console.log(string)