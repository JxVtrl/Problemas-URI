/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pedido = (lines.shift()).split(" ", 2)

const CQ = 4
const XS = 4.50
const XB = 5
const TS = 2
const RF = 1.50
total = null

if (pedido[0] == 1){
    total = CQ*pedido[1]
}
else if(pedido[0] == 2){
    total = XS*pedido[1]
}
else if(pedido[0] == 3){
    total = XB*pedido[1]
}
else if(pedido[0] == 4){
    total = TS*pedido[1]
}
else if(pedido[0] == 5){
    total = RF*pedido[1]
}
total = total.toFixed(2)

console.log(`Total: R$ ${total}`)