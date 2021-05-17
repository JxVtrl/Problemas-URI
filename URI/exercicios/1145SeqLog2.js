
var colunas = 3
var linhas = 99

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
}while(c<linhas)