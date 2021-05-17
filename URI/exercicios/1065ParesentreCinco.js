var entradas = []
var n = 0

for(var c = 1; c <= 5; c++){
    entradas.push(Number(prompt()))
    if(entradas[c-1]%2 == 0){
        n++
    }
}
console.log(`${n} valores pares`)