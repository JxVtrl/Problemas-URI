/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var entrada = Number(lines.shift())
for(var c = 1; c<=entrada;c++){
    if(c%2==0){
    console.log(`${c}^2 = ${c*c}`)
    }
}