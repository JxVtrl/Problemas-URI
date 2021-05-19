/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = (lines.shift()).split(" ", 3)

var A = parseFloat(valores[0])
var B = parseFloat(valores[1])
var C = parseFloat(valores[2])
const pi = 3.14159

var triangulo = ((A*C)/2).toFixed(3)
var circulo = (pi*(C**2)).toFixed(3)
var trapezio = (((A+B)*C)/2).toFixed(3)
var quadrado = (B*B).toFixed(3)
var retangulo = (A*B).toFixed(3)

console.log(`TRIANGULO: ${triangulo}`)
console.log(`CIRCULO: ${circulo}`)
console.log(`TRAPEZIO: ${trapezio}`)
console.log(`QUADRADO: ${quadrado}`)
console.log(`RETANGULO: ${retangulo}`)