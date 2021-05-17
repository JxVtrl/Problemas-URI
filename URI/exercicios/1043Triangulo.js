/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var entrada = ('6.0 4.0 2.1').split(" ", 3)
var A = Number(entrada[0])
var B = Number(entrada[1])
var C = Number(entrada[2])
var perimetro = A+B+C
var trap = ((A+B)*C)/2
console.log(trap)
console.log(perimetro)

if((B - C)< A && A < (B+C) == true ){
    if((A - C)  < B && B < (A + C) == true){
        if((A - B) < C && C < (A + B) == true){
            console.log(`Perimetro = ${perimetro.toFixed(1)}`)
        }
    }
}
else{
    console.log(`Area = ${trap.toFixed(1)}`)
}
