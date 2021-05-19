/* @jxvtrl */

const fs = require('fs')
try {
    var input = fs.readFileSync('F:/CÓDIGOS/MeusProjetos/Problemas-JavaScript-Simples/URI/exercicios/teste.txt', 'utf8')
  } catch (err) {
    console.error(err)
  }
var lines = input.split('\n');

var entrada = lines.shift()
for(var c = 0;c<entrada;c++){
    var exp = (lines.shift()).split(" ", 7)
    var N1 = Number(exp[0])
    var D1 = Number(exp[2])
    var N2 = Number(exp[4])
    var D2 = Number(exp[6])

    if(exp[3]=='+'){
        var somaN = (N1*D2 + N2*D1)
        var somaD = (D1*D2)
        var NumSimp = somaN
        var DenSimp = somaD
        
        for(var n = 1;n<=somaD;n++){
            if(somaN%n==0 && somaD%n==0){
                NumSimp = somaN/n
                DenSimp = somaD/n
            }
        }
    }

    else if(exp[3]=='-'){
        var somaN = (N1*D2 - N2*D1)
        var somaD = (D1*D2)
        var NumSimp = somaN
        var DenSimp = somaD
        
        for(var n = 1;n<=somaD;n++){
            if(somaN%n==0 && somaD%n==0){
                NumSimp = somaN/n
                DenSimp = somaD/n
            }
        }
    }

    else if(exp[3]=='*'){
        var somaN = (N1*N2)
        var somaD = (D1*D2)
        var NumSimp = somaN
        var DenSimp = somaD
        
        for(var n = 1;n<=somaD;n++){
            if(somaN%n==0 && somaD%n==0){
                NumSimp = somaN/n
                DenSimp = somaD/n
            }
        }
    }

    else if(exp[3]=='/'){
        var somaN = (N1*D2)
        var somaD = (N2*D1)
        var NumSimp = somaN
        var DenSimp = somaD

        for(var n = 1;n<=somaD;n++){
            if(somaN%n==0 && somaD%n==0){
                NumSimp = somaN/n
                DenSimp = somaD/n
            }
        }
    }
    console.log(`${somaN}/${somaD} = ${NumSimp}/${DenSimp}`)
}