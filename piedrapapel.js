tu=3
maq=Math.round(Math.random()*3)
//1 piedra
//2 papel
//3 tijeras
if (tu != maq){
    if ((tu==1 && maq == 3)||(tu==2 && maq == 1)||(tu==3 && maq == 2)){
        console.log("Ganaste")
    }else{
        console.log("Gana la PC")
    }  
}else{
    console.log("empate")
}