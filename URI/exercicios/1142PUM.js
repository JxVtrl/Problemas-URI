/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linhas = Number(lines.shift())
const cont = 3
var soma = 0

for(var n = 0;n<linhas;n++){
    var string = ''
    for(var c = 0;c<cont;c++){
        soma++
        string += `${soma} `
    }
    soma++
    string += 'PUM'
    console.log(string)
}