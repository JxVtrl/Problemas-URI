/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var entrada = Number(lines.shift())
if((entrada > 2000) && (entrada<=3000)){
    var res = Number((entrada-2000)*(8/100))
    console.log(`R$ ${res.toFixed(2)}`)
}
else if((entrada > 3000) && (entrada <= 4500)){
    var res = Number(((1000)*(8/100)) + ((entrada-3000)*(18/100)))
    console.log(`R$ ${res.toFixed(2)}`)
}
else if(entrada > 4500){
    var res = Number(((999.99)*(8/100)) + ((1499.99)*(18/100)) + ((entrada-4500)*(28/100)))
    console.log(`R$ ${res.toFixed(2)}`)
}
else{
    console.log('Isento')
}
