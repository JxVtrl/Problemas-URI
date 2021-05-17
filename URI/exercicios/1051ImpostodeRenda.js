var entrada = 1701.12
entrada = Number(entrada)

switch(entrada){
    case entrada <= 2000:
        console.log('Isento')
        break
    case entrada <= 3000:
        var res = parseFloat((entrada-2000)*(8/100))
        console.log(res.toFixed(2))
        break
    case entrada <= 4500:
        var res = parseFloat(((entrada-2000)*(8/100)) + ((entrada-1000)*(18/100)))
        console.log(res.toFixed(2))
        break
    case entrada > 4500:
        var res = parseFloat(((entrada-2000)*(8/100)) + ((entrada-1000)*(18/100)) + ((entrada-1500)*(28/100)))
        console.log(res.toFixed(2))
        break
}
console.log(res)



