var linhas = 7
const cont = 3
var soma = 0

for(var n = 0;n<linhas;n++){
    var string = ''
    for(var c = 0;c<cont;c++){
        soma++
        string += `${soma} `
    }
    soma++
    string += 'PUM'
    console.log(string)
}