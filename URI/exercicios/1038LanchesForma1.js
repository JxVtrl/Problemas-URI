/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: Number(lines.shift())

var pedido = ('3 2').split(" ", 2)

var CQ = 4
var XS = 4.50
var XB = 5
var TS = 2
var RF = 1.50
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