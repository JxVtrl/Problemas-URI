/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var dois = 2
var num = []
var media = 0
var nvCalc = false
do{
    var entrada = Number(lines.shift())
    if(entrada<0 || entrada>10){
        console.log("nota invalida")
    }
    else if(entrada>=0||entrada<=10){
        dois--
        num.push(entrada)
        if(dois == 0){
            var n1 = Number(num[0])
            var n2 = Number(num[1])
            media = (n1+n2)/2
            console.log(`media = ${media.toFixed(2)}`)
            var pergunta = false
            do{
                console.log("novo calculo (1-sim 2-nao)")
                var ask = Number(lines.shift()) 
                if(ask===1){
                    num=[]
                    pergunta = true
                }
                else if(ask===2){
                    nvCalc = true
                }   
                else{
                    pergunta = false
                }
            }while(pergunta==false)
        }
    }
}while(nvCalc==false)