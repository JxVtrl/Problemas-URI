/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var vertebra = lines.shift('')
var filo = lines.shift('')
var come = lines.shift('')


if(vertebra == 'vertebrado'){
    if(filo == 'ave'){
        if(come == 'carnivoro'){
            var res = 'aguia'
        }
        else if(come == 'onivoro'){
            var res = 'pomba'
        }
    }
    else if(filo == 'mamifero'){
        if(come=='onivoro'){
            var res = 'homem'
        }
        else if(come=='herbivoro'){
            var res = 'vaca'
        }
    }
    
}
else if(vertebra == 'invertebrado'){
    if(filo == 'inseto'){
        if(come =='hematofago'){
            var res = 'pulga'
        }
        else if(come == 'herbivoro'){
            var res = 'lagarta'
        }
    }
    else if(filo == 'anelideo'){
        if(come == 'hematofago'){
            var res = 'sanguessuga'
        }
        else if(come == 'onivoro'){
            var res = 'minhoca'
        }
    }
}
console.log(res)