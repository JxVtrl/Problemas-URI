var casos = 1
do{
    var entrada = ('100 150 1.0 0').split(" ", 4)
    var PA = Number(entrada[0])
    var PB = Number(entrada[1])
    var G1 = Number(entrada[2])
    var G2 = Number(entrada[3])


    for(var anos = 0;PA<=PB;anos++){
    PA += parseInt((PA*(G1/100)))
    PB += parseInt((PB*(G2/100)))
    if(anos>100){
        console.log("Mais de 1 seculo.")
        break
    }
    }
    if(anos<=100){
    console.log(`${anos} anos.`)
    }

    casos--
}while(casos>0)