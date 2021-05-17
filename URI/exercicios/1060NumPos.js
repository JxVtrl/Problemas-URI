var n1 = 7
var n2 = -5
var n3 = 6
var n4 = -3.4
var n5 = 4.6
var n6 = 12
var lista =[n1,n2,n3,n4,n5,n6]
var n = 0
for(var c = 0;c<=6;c++){
    if(lista[c] > 0){
        n++
    }
}

console.log(`${n} valores positivos`)