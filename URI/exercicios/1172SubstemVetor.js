/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = []
for(c=0;c<10;c++){
    X[c] = Number(lines.shift())
    if(X[c]<=0){
        X[c] = 1
    }
    console.log(`X[${c}] = ${X[c]}`)
}