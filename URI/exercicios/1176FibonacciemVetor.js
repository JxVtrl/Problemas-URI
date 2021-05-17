var qtd = 1
for(var c = 0;c<qtd;c++){
    var pos = 10
    var soma = 0
    var fib = [0,1]
    for(var n = 0;n<pos;n++){
        fib.push(fib[n]+fib[(n+1)])
    }
    console.log(`Fib(${pos}) = ${fib[pos]}`)
}