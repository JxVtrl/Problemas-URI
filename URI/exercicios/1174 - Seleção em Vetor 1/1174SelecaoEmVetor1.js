/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = []
for(c = 0; c<100;c++){
    A.push(Number(lines.shift()))
    if(A[c]<=10){
        console.log(`A[${c}] = ${A[c].toFixed(1)}`)
    }
}