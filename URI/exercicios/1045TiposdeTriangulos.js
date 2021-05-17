/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var entrada = ('5.0 7.0 7.0').split(" ", 3)
entrada[0] = Number(entrada[0])
entrada[1] = Number(entrada[1])
entrada[2] = Number(entrada[2])

entrada = entrada.sort(function(a, b){return a - b})
entrada.reverse()

const A = entrada[0]
const B = entrada[1]
const C = entrada[2]
    
if(A >= B+C){
    console.log("NAO FORMA TRIANGULO")
}
else{
    if(A*A==B*B+C*C){
        console.log("TRIANGULO RETANGULO")
    }
    if(A*A > B*B + C*C){
        console.log("TRIANGULO OBTUSANGULO")
    }
    if(A*A < B*B + C*C){
        console.log("TRIANGULO ACUTANGULO")
    }
    if(A==B && B==C ){
        console.log("TRIANGULO EQUILATERO")
    }
    if(A==B || B==C || A==C){
        if(A==B && B==C){
        }
        else{
            console.log("TRIANGULO ISOSCELES")  
        }
    }
}
