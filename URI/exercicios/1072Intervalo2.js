var casos = 10
var entradas = [1,
    20,
    10,
    3,
    5,
    12,
    14,
    99,
    17,
    19]
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