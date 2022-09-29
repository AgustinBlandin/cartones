var entrada=300


var fila1=''
var fila2=''

var blanco=' '
var negro='#'

for (i=1;i<=entrada;i++){
    
    if (i%2==0){
        fila1=fila1 + negro;
        fila2=fila2 + blanco;
    }else{
        fila1=fila1 + blanco;
        fila2=fila2 + negro;
    }
    
}

for (i=1;i<=entrada;i++){
    if (i%2==0){
        console.log('|'+fila1+'|')
    }else{
        console.log('|'+fila2+'|')
    }
}