/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pedido = ((lines.shift()).split(" ", 2))
var total = 0
const cond = Number(pedido[0])
const qtd = Number(pedido[1])

switch (cond) {
    case 1:
        total = 4*qtd;
        break;
    case 2:
        total = 4.50*qtd;
        break;
    case 3:
        total = 5*qtd;
        break;
    case 4:
        total = 2*qtd;
        break;
    case 5:
        total = 1.50*qtd;
        break;
}

total = total.toFixed(2)
console.log(`Total: R$ ${total}`)