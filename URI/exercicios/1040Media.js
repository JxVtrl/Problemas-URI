/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var notas = ('10.0 10.0 0.0 0.0').split(" ", 4)
var final = Number('5.0')
var N1 = notas[0]
var N2 = notas[1]
var N3 = notas[2]
var N4 = notas[3]
var media = Number(((N1*2+N2*3+N3*4+N4*1)/10).toFixed(1))
console.log(`Media: ${media.toFixed(1)}`)

if (media >= 5 && media <= 6.9){
    console.log("Aluno em exame.")
    console.log(`Nota do exame: ${final.toFixed(1)}`)
    var mediaFinal = ((final+media)/2).toFixed(1)
    if(mediaFinal >= 5){
        console.log("Aluno aprovado.")
        console.log(`Media final: ${mediaFinal}`)
    }
    else{
        console.log("Aluno reprovado.")
        console.log(`Media final: ${mediaFinal}`)
    }
    
}
else if(media < 5){
    console.log("Aluno reprovado.")
}
else{
    console.log("Aluno aprovado.")
}



