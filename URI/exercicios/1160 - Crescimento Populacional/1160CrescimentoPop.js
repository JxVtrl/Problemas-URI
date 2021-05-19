/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var casos = Number(lines.shift())
while(casos>0){
    var entrada = (lines.shift()).split(" ", 4)
    var PA = Number(entrada[0])
    var PB = Number(entrada[1])
    var G1 = Number(entrada[2])
    var G2 = Number(entrada[3])
    var anos = 0

    for(anos = 0;PA<=PB;anos++){
    PA += parseInt(PA*(G1/100))
    PB += parseInt(PB*(G2/100))
    }

    if(anos>100){
        console.log("Mais de 1 seculo.")
        casos--

    }
    else if(anos<=100){
        console.log(`${anos} anos.`)
        casos--
    }
}