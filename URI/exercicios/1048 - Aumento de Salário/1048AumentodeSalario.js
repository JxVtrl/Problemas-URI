/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = Number(3000.00)
if(salario <= 400){
    var novoSal = (salario*15/100)+salario
    var reajuste = salario*15/100
    var percen = 15
}
else if(salario <= 800){
    var reajuste = salario*12/100
    var percen = 12
    var novoSal = (salario*12/100)+salario
}
else if(salario <= 1200){
    var reajuste = salario*10/100
    var novoSal = (salario*10/100)+salario
    var percen = 10
}
else if(salario <= 2000){
    var reajuste = salario*7/100
    var novoSal = (salario*7/100)+salario
    var percen = 7
}
else{
    var reajuste = salario*4/100
    var novoSal = (salario*4/100)+salario
    var percen = 4
}
console.log(`Novo salario: ${novoSal.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${percen} %`)