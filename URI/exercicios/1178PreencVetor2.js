/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var  N = []
var entrada = (200.0000).toFixed(4)
for(var c = 0;c<100;c++){
    if(entrada == 0.0001){
        N.push(entrada)
        console.log(`N[${c}] = ${(N[c])}`)
        var entrada = (0.0000).toFixed(4)
        N.push(entrada)
    }
    else{
        N.push(entrada)
        console.log(`N[${c}] = ${(N[c])}`)
        var entrada = (entrada/2).toFixed(4)
    }
}