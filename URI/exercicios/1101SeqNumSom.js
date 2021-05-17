/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var termino = false
do{
    var entrada = lines.shift().split(" ", 2)
    if(entrada[1]<entrada[0]){
        var n1 = Number(entrada[1])
        var n2 = Number(entrada[0])
    }
    else if((entrada[0]<entrada[1])){
        var n1 = Number(entrada[0])
        var n2 = Number(entrada[1])
    }
    if(n1<=0 || n2 <= 0){
        termino = true
    }
    else{
        var soma = 0
        var string = ``
        for(var c = n1;c<=n2;c++){
            string = string + `${c} `
            soma += c
            if(c==n2){
                console.log(`${string}Sum=${soma}`)
            }
        }
    }
} while(termino != true)