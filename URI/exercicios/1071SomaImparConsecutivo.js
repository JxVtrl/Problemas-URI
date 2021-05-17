/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var entrada = []
var impares = []
var soma = 0
for(var c = 0; c<2;c++){
    entrada[c] = Number(lines.shift())
}
if(entrada[0]>entrada[1]){
    var n1 = entrada[1]
    var n2 = entrada[0]
}
else{
    var n1 = entrada[0]
    var n2 = entrada[1]
}
if(n1==n2){
    console.log('0')
}
else{

for(var control = (n1+1);control<n2;control++){
    if(control%2!=0){
       impares.push(control) 
    }
}
for(var c=0;c< impares.length;c++){
    soma += impares[c]
}
console.log(`${soma}`)
}