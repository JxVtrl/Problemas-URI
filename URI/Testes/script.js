
    
    
    // COLOQUE A RESOLUCAO AQUI
    // USE COMO SAÍDA res.innerHTML += ''
    // Para perguntar use  var entrada = Number(prompt('Numero: '))
    var linha = Number(prompt())
    var T = prompt()
    var M=[]
    
    for(var L = 0;L<2;L++){
        M[L]= new Array(2)
        for(var C = 0;C<2;C++){
            var entrada = Number(prompt())
            M[L][C] = parseFloat(entrada)
        }
    }
    
    var soma = 0
    
    for(var c = 0;c<2;c++){
        soma += M[linha][c]
        if(T=='S'){
            CONSOL += `${soma.toFixed(1)}`
        }
        else{
            res.innerHTML += `${(soma/2).toFixed(1)}`
        }
    }
   
