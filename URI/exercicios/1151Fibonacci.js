/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = Number(lines.shift())
var fibo = [0,1]

for(var c = 0;c<entrada-1;c++){
    if(c==1){
     var N = fibo[0]+fibo[1]
     fibo.push(N)
    }
    else if(c>1){
    var N = fibo[c]+fibo[c-1]
    fibo.push(N)
    }
}
var frase = ''
for(var n = 0;n<=fibo.length;n++){
    if(n==fibo.length-1){
    frase += `${fibo[n]}`
    }
    else if(n<fibo.length){
        frase += `${fibo[n]} `
    }
}
console.log(frase)