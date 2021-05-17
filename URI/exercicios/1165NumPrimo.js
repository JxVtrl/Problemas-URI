var qtdNum = 1
do{
    var entrada = 8
    var dois = 2
    for(var c=1;c<=entrada;c++){
        if(entrada%c==0){
            dois--
        }
    }
    if(dois==0){
        console.log(`${entrada} eh primo`)
    }
    else{
        console.log(`${entrada} nao eh primo`)
    }
    qtdNum--
}while(qtdNum>0)