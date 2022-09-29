var entrada=27

var inicio = entrada

var salida = String(inicio)

function numPasos(long){
for (var j=1;long!=1;j++){

    if (long%2==0){
        long=long/2;
    } else {
        long=long*3+1
    }
    
}
var asteriscos=""
for (k=1;k<=j;k++){
    asteriscos+="* "
}
return asteriscos
}


for (i=1;inicio!=1;i++){

    if (inicio%2==0){
        inicio=inicio/2;
    } else {
        inicio=inicio*3+1
    }
    salida=salida+" "+inicio
}

console.log("N: "+entrada)
console.log(salida)
for (l=entrada;l>=1;l--){
console.log("N "+l+": " +numPasos(l))
}