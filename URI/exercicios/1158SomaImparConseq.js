var casos = 1
for(var c = 1;c<=casos;c++){
    var entrada = ('11 2').split(" ", 2)
    var X = Number(entrada[0])
    var Y = Number(entrada[1])
    var soma = 0
    if(X%2==0){
    do{
        for(var n = X+1;Y>0;n++){
            if(n%2!=0){
                soma += n
                Y--
            }
        }
    }while(Y>0)
    console.log(soma)
    }
    else if(X%2!=0){
    do{
        for(var n = X;Y>0;n++){
            if(n%2!=0){
                soma += n
                Y--
            }
        }
    }while(Y>0)
    console.log(soma) 
    }
}