var n1 = -137
var n2 = -243
var soma = 0
if(n2<n1){
    var temp = n1
    n1 = n2
    n2 = temp
}
for(var c=n1;c<=n2;c++){
    if(c%13 != 0){
        soma += c        
    }
}
console.log(soma)