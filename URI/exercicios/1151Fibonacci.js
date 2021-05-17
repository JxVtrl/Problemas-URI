var entrada = 60
var final = [0,1]

for(var c = 0;c<entrada-1;c++){
    if(c==1){
     var N = final[0]+final[1]
     final.push(N)
    }
    else if(c>1){
    var N = final[c]+final[c-1]
     final.push(N)
    }
}
var frase = ''
for(var n = 0;n<=final.length;n++){
    if(n==final.length-1){
    frase += `${final[n]}`
    }
    else if(n<final.length){
        frase += `${final[n]} `
    }
}
frase.split(" ")
console.log(frase)