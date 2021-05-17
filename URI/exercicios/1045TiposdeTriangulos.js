var entrada = ('6.0 8.0 10.0').split(" ", 3)
var limpo = []
limpo[0] = Number(entrada[0])
limpo[1] = Number(entrada[1])
limpo[2] = Number(entrada[2])
if(limpo[0] >= limpo[1] && limpo[0] >= limpo[2]){
    var A = limpo[0]
    if(limpo[1] > limpo[2]){
        var B = limpo[1]
        var C = limpo[2]
    }
    else if(limpo[1]==limpo[2]){
        var B = limpo[1]
        var C = limpo[2]
    }
    else{
        var B = limpo[2]
        var C = limpo[1]
    }
}
else if(limpo[1] >= limpo[0] && limpo[1] >= limpo[2]){
    var A = limpo[1]
    if(limpo[0] > limpo[2]){
        var B = limpo[0]
        var C = limpo[2]
    }
    else if(limpo[0]==limpo[2]){
        var B = limpo[1]
        var C = limpo[2]
    }
    else{
        var B = limpo[2]
        var C = limpo[1]
    }
}
else if(limpo[2] >= limpo[0] && limpo[2] >= limpo[1]){
    var A = limpo[2]
    if(limpo[0] > limpo[1]){
        var B = limpo[0]
        var C = limpo[1]
    }
    else if(limpo[0]==limpo[1]){
        var B = limpo[0]
        var C = limpo[1]
    }
    else{
        var B = limpo[1]
        var C = limpo[0]
    }
}

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
