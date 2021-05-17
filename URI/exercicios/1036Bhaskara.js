/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var valores = ('10.3 203.0 5.0').split(" ", 3)
var A = parseFloat(valores[0])
var B = parseFloat(valores[1])
var C = parseFloat(valores[2])
const delta = (B*B)-4*A*C

if (delta < 0 || (2*A) == 0){
    console.log("Impossivel calcular")
}
else{
    var R1 = ((-B+Math.sqrt(delta))/(2*A)).toFixed(5)
    var R2 = ((-B-Math.sqrt(delta))/(2*A)).toFixed(5)
    console.log(`R1 = ${R1}`)
    console.log(`R2 = ${R2}`)
}