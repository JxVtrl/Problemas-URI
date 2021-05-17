/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dia1 = (lines.shift()).split(" ", 2)
var tempo1 = (lines.shift('')).split(" : ", 3)
var dia2 = (lines.shift()).split(" ", 2)
var tempo2 = (lines.shift()).split(" : ", 3)

var d1 = Number(dia1[1])
var h1 = Number(tempo1[0])
var m1 = Number(tempo1[1])
var s1 = Number(tempo1[2])

var d2 = Number(dia2[1])
var h2 = Number(tempo2[0])
var m2 = Number(tempo2[1])
var s2 = Number(tempo2[2])
 

if(d1==d2){
    var dias = 0
    if(h1 == h2){
        var horas = 0
        if(m1==m2){
            var minutos = 0
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
        }
        else if(m1<m2){
            var minutos = m2-m1
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
        }
    }
    else if(h1<h2){
        var horas = h2-h1
        if(m1==m2){
            var minutos = 0
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
            else if(s1>s2){
                minutos = 59
                horas--
                var segundos = 60-(s1-s2)
            }
        }
        else if(m1<m2){
            var minutos = m2-m1
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
        }
        else if(m1>m2){
            var minutos = 60-(m1-m2)
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
            else if(s1>s2){
                minutos--
                horas--
                var segundos = 60-(s1-s2)
            }

        }
    }
}
else if(d1<d2){
    var dias = d2-d1
    if(h1 == h2){
        var horas = 0
        if(m1==m2){
            var minutos = 0
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
            else if(s1>s2){
                minutos = 59
                horas--
                var segundos = 60-(s1-s2)
            }
        }
        else if(m1<m2){
            var minutos = m2-m1
            if(s1==s2){
                
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
                minutos--
            }
            else if(s1>s2){
                var segundos = 60-(s1-s2)
                minutos--
            }
        }
        else if(m1>m2){
            dias--
            var horas = 24
            var minutos = 60-(m1-m2)
            if(s1==s2){
                horas--
                var segundos = 0
            }
            else if(s1<s2){
                horas--
                var segundos = s2-s1
            }
            else if(s1>s2){
                minutos--
                horas--
                var segundos = 60-(s1-s2)
            }
        }
    }
    else if(h1<h2){
        var horas = h2-h1
        if(m1==m2){
            var minutos = 0
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
            else if(s1>s2){
                minutos = 59
                horas--
                var segundos = 60-(s1-s2)
            }
        }
        else if(m1<m2){
            var minutos = m2-m1
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
        }
        else if(m1>m2){
            var minutos = 60-(m1-m2)
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
            else if(s1>s2){
                minutos--
                horas--
                var segundos = 60-(s1-s2)
            }

        }
    }
    else if (h2 < h1){
        dias--
        var horas = (24-h1)+h2
        if(m1 > m2){
            var minutos = 60-(m1-m2)
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
                horas--
            }
            else if(s1>s2){
                minutos--
                horas--
                var segundos = 60-(s1-s2)
            }
        }
        else if(m1 == m2){
            var minutos = 0
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
        }
        else if(m2>m1){
            var minutos = m2-m1
            if(s1==s2){
                var segundos = 0
            }
            else if(s1<s2){
                var segundos = s2-s1
            }
            else if(s1>s2){
                minutos--
                var segundos = 60-(s1-s2)
            }
        }
    }
}

console.log(`${dias} dia(s)`)
console.log(`${horas} hora(s)`)
console.log(`${minutos} minuto(s)`)
console.log(`${segundos} segundo(s)`)