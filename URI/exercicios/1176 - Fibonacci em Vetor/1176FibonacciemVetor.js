/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd = Number(lines.shift())
for(var c = 0;c<qtd;c++){
    var pos = Number(lines.shift())
    var fib = [0,1]
    for(var n = 0;n<pos;n++){
        fib.push(fib[n]+fib[(n+1)])
    }
    console.log(`Fib(${pos}) = ${fib[pos]}`)
}