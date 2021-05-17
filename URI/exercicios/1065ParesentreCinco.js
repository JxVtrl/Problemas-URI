/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var entradas = []
var n = 0

for(var c = 0; c < 5; c++){
    entradas.push(Number(lines.shift()))
    if(entradas[c]%2 == 0){
        n++
    }
}
console.log(`${n} valores pares`)