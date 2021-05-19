/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(var blocos = 1;blocos <= 5;blocos++){
    switch(blocos){
        case 1:
            var i = 1
            var j = 6
            for(var c = 1;c<=3;c++){
                if(c==1){
                   j++
                   console.log(`I=${i} J=${j}`)
                }
                else if(c==2){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
                else if(c==3){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
            }
            break;
        case 2:
            var i = 3
            var j = 8
            for(var c = 1;c<=3;c++){
                if(c==1){
                   j++
                   console.log(`I=${i} J=${j}`)
                }
                else if(c==2){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
                else if(c==3){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
            }
            break;
        case 3:
            var i = 5
            var j = 10
            for(var c = 1;c<=3;c++){
                if(c==1){
                   j++
                   console.log(`I=${i} J=${j}`)
                }
                else if(c==2){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
                else if(c==3){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
            }
            break;
        case 4:
            var i = 7
            var j = 12
            for(var c = 1;c<=3;c++){
                if(c==1){
                   j++
                   console.log(`I=${i} J=${j}`)
                }
                else if(c==2){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
                else if(c==3){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
            }
        break; 
        case 5:
            var i = 9
            var j = 14
            for(var c = 1;c<=3;c++){
                if(c==1){
                   j++
                   console.log(`I=${i} J=${j}`)
                }
                else if(c==2){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
                else if(c==3){
                    j--
                    console.log(`I=${i} J=${j}`)
                }
            }
        break;
    }
}