var qtd = 3
for(var c = 0;c<qtd;c++){
    var notas = ('6.5 4.3 6.2').split(" ", 3)

    for(var n = 0; n<3;n++){
        if(notas[n]==notas[0]){
            var n1 = notas[0]*2
        }
        else if(notas[n]==notas[1]){
            var n2 = notas[1]*3
            
        }
        else if(notas[n]==notas[2]){
            var n3 = notas[2]*5
        }
        var media = (n1+n2+n3)/10 
    }
    console.log(`${media.toFixed(1)}`)
}