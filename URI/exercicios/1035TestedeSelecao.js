/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: Number(lines.shift())

var numeros = ('2 3 2 6').split(" ", 4)
var A = numeros[0]
console.log(A)
var B = numeros[1]
console.log(B)
var C = numeros[2]
console.log(C)
var D = numeros[3]
console.log(D)


if(B > C && D > A && (C+D) > (A+B) && C > 0 && D > 0 && A%2 == 0){
    console.log("Valores aceitos")
}
else{
    console.log("Valores nao aceitos")
}