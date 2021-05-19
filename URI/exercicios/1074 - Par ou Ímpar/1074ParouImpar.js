/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd_Valores = Number(lines.shift())
var valores = []
for (var c = 0;c<qtd_Valores;c++){
    var num = Number(lines.shift())
    var string = ''
    if(num==0){
        console.log('NULL')
    }
    else if(num%2==0){
        string += 'EVEN '
        if(num<0){
            string += 'NEGATIVE'
        }
        else{
            string += 'POSITIVE'
        }
        console.log(string)
        }
        
        else{
        string += 'ODD '
        if(num<0){
            string += 'NEGATIVE'
        }
        else{
            string += 'POSITIVE'
        }
        console.log(string)
    }
}