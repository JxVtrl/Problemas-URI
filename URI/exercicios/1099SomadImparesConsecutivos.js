var qtd = 2
for(var c = 0;c<qtd;c++){
    var teste = ('3 8').split(" ")
    
    if(teste[1]<teste[0]){
        var n1 = Number(teste[1])
        var n2 = Number(teste[0])
    }
    else{
        var n1 = Number(teste[0])
        var n2 = Number(teste[1])
    }
    var soma = 0
    for(var n = n1+1; n<n2; n++){
        if(n%2!=0){
            soma += n
        }
    }
    console.log(soma)
}