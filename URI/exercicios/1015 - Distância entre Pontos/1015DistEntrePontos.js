/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift().split(" ")
var p2 = lines.shift().split(" ")

var dis = parseFloat(Math.sqrt((p2[0]-p1[0])**2+(p2[1]-p1[1])**2)).toFixed(4)
console.log(dis)