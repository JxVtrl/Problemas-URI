var qtd_Valores = 1
var c = qtd_Valores
var valores = []
for (qtd_Valores = 0;qtd_Valores<c;qtd_Valores++){

    if(valores[qtd_Valores]<0 && valores[qtd_Valores]%2==0){
        console.log(`EVEN NEGATIVE`)
    }
    else if(valores[qtd_Valores]>0 && valores[qtd_Valores]%2==0){
        console.log(`EVEN POSITIVE`)
    }
    else if(valores[qtd_Valores]>0 && valores[qtd_Valores]%2!=0){
        console.log(`ODD POSITIVE`)
    }
    else if(valores[qtd_Valores]<0 && valores[qtd_Valores]%2!=0){
        console.log(`ODD NEGATIVE`)
    }
    else{
        console.log(`NULL`)
    }
}