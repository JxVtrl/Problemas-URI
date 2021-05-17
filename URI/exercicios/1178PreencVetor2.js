var entrada = 200.0000
var  N = []
for(var c = 1;c<=100;c++){
    if(entrada == 0.0001){
        N.push(entrada)
        console.log(`N[${c-1}] = ${(N[c-1])}`)
        var entrada = (0.0000).toFixed(4)
        N.push(entrada)
    }
    else{
        N.push(entrada)
        console.log(`N[${c-1}] = ${(N[c-1])}`)
        var entrada = (entrada/2).toFixed(4)
    }
}