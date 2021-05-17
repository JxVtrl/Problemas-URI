var parar = false
do{
var entrada = -1
if(entrada==0){
    parar = true
}
else if(entrada%2==0){
    var soma = entrada
    for(var c = 0; c<4;c++){
        entrada += 2
        soma += entrada
    }
}
else if(entrada%2!=0){
    entrada += 1
    var soma = entrada
    for(var c = 0; c<4;c++){
        entrada += 2
        soma += entrada
    }
}
console.log(soma)

}while(parar==false)