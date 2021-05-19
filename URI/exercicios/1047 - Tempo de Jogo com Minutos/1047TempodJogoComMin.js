/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var entrada = (lines.shift()).split(" ", 4)
var h1 = Number(entrada[0])
var h2 = Number(entrada[2])
var m1 = Number(entrada[1])
var m2 = Number(entrada[3])

if(h1 == h2){
    var horas = 0
    if(m1==m2){
        horas = 24
        var minutos = 0
    }
    else if(m1>m2){
        horas = 23
        var minutos = 60-(m1-m2)
    }
    else{
        horas = 23
        var minutos = 60-(m2-m1)
    }
}
else if(h2 > h1){
    var horas = h2 - h1
    if(m1 > m2){
        var minutos = 60-(m1-m2)
        horas--
    }
    else if(m1 == m2){
        var minutos = 0
    }
    else if(m2>m1){
        var minutos = m2-m1
    }
}
else if (h2 < h1){
    var horas = (24-h1)+h2
    if(m1 > m2){
        var minutos = 60-(m1-m2)
        horas--
    }
    else if(m1 == m2){
        var minutos = 0
    }
    else if(m2>m1){
        var minutos = m2-m1
    }
}

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)