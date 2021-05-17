var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dois = 2
var termina = false
var num = []
var media = 0
var nvCalc = 1
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
            
            var pergunta = 1
            do{
                console.log("novo calculo (1-sim 2-nao)")
                var ask = Number(lines.shift()) 
                if(ask==1){
                    num=[]
                    pergunta = 2
                }
                else if(ask==2){
                    nvCalc = 2
                }
            }while(pergunta==1)
        }
    }
}while(nvCalc==1)