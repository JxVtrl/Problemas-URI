/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ", 2)
var colunas = Number(entrada[0])
var num = Number(entrada[1])
var c = 0
do{
    var string = '' 
    for(var j = 1;j<=colunas;j++){
        c++
        if(j<colunas){
            string += `${c} `
        }
        else if(j==colunas){
            string += `${c}`
        }
       
       
    }
    console.log(string)
}while(c<num)