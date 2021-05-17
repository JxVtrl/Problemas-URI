var qtdNum = 1
do{
    var entrada = 6
    var soma = 0
    for(var c=1;c<entrada;c++){
        if(entrada%c==0){
            soma += c
        }
    }
    if(soma==entrada){
    console.log(`${entrada} eh perfeito`)
    }
    else{
        console.log(`${entrada} nao eh perfeito`)
    }
    
}while(qtdNum>0)