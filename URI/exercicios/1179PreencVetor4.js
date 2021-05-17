var par = []
var impar = []
for(var c = 0;c<7;c++){
    var entrada = 1
    if(entrada%2==0){
        par.push(entrada)
        if(par.length==5){
            for(var n = 0;n<5;n++){
                console.log(`par[${n}] = ${par[n]}`)
            }
            var par = []
        }
    }
    else{
        impar.push(entrada)
        if(impar.length==5){
            for(var n = 0;n<5;n++){
                console.log(`impar[${n}] = ${impar[n]}`)
            }
            var impar = []
        }
    }
}
if(impar.length>0){
    for(var n = 0;n < impar.length;n++){
        console.log(`impar[${n}] = ${impar[n]}`)
    }
}
if(par.length>0){
    for(var n = 0;n < par.length;n++){
        console.log(`par[${n}] = ${impar[n]}`)
    }
}