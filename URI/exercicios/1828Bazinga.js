/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()


var entrada = Number(lines.shift())
for(var c = 0;c<entrada;c++){
    var string = (lines.shift().toLowerCase()).split(" ", 2)

    if(string[0]==string[1]){
        console.log(`Caso #${c+1}: De novo!`)
    }
    else if(string[0]=='papel'){
            if(string[1]=='tesoura'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='lagarto'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='spock'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
            else if(string[1]=='pedra'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
    }
    else if(string[0]=='tesoura'){
            if(string[1]=='pedra'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='spock'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='papel'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
            else if(string[1]=='lagarto'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
    }
    else if(string[0]=='pedra'){
            if(string[1]=='papel'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='spock'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='lagarto'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
            else if(string[1]=='tesoura'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
    }
    else if(string[0]=='spock'){
            if(string[1]=='lagarto'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='papel'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='tesoura'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
            else if(string[1]=='pedra'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
    }
    else if(string[0]=='lagarto'){
            if(string[1]=='tesoura'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='pedra'){
                console.log(`Caso #${c+1}: Raj trapaceou!`)
            }
            else if(string[1]=='papel'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
            else if(string[1]=='spock'){
                console.log(`Caso #${c+1}: Bazinga!`)
            }
    }
}