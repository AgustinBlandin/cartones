
var cartones ={0:'hola'}
var carton=[0,0,0]
var i=0
var cod;

a=0
while  (a != 5){
	a=a+1
	b=0+a
    while  (b != 6){
	b=b+1
	c=0+b
    while  (c != 7){
	 c=c+1
     d=0+c
     while  (d != 8){
    d=d+1
    i=i+1
	 carton=[a,b,c,d]
	 cartones[i]=carton
     }
    }
}
}



var cartoon=[4,5,7,8]

function buscarCarton(numerCarton){
    
    let mensaje=null
    for (serial=0;serial<=70;serial++)
    if (numerCarton[1]==cartones[serial][1]){

        if (numerCarton[2]==cartones[serial][2]){

            if (numerCarton[3]==cartones[serial][3]){

                if (numerCarton[4]==cartones[serial][4]){
                    
                    cod=serial;
                   mensaje='El serial del carton es: '+serial
                }
            }
        }
    }
    if (mensaje==null){
        mensaje='carton no valido'
    }
    return mensaje
}



var cartoon=[3,4,6,7]
mensajeG1=buscarCarton(cartoon.sort())
if (mensajeG1!='carton no valido'){
    cartones[cod]='vendido'
}
mensajeG2=buscarCarton([4,5,6,8])
if (mensajeG2!='carton no valido'){
    cartones[cod]='vendido'
}
console.log(cartones)
console.log(mensajeG2)