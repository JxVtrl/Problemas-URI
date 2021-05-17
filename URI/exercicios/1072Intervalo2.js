/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var casos = Number(lines.shift())
var entradas = []
for(var c = casos; c>0;c--){
    entradas.push(Number(lines.shift()))
}
var control = 0
var control2 = 0
for(var n = 0;n<entradas.length;n++){
    if(entradas[n] >= 10 && entradas[n]<=20){
        control++
    }
    else{
        control2++
    }
}
console.log(`${control} in`)
console.log(`${control2} out`)