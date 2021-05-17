var entrada = ('7 21 -14').split(" ", 3)
var limpa = []
limpa[0] = Number(entrada[0])
limpa[1] = Number(entrada[1])
limpa[2] = Number(entrada[2])

limpa = limpa.sort(function(a, b){return a - b})
for(var c = 0; c <= 2; c++){
    console.log(limpa[c])
}
console.log('')

for(var d = 0; d <= 2; d++){
    console.log(entrada[d])
}



