var tu=3;
var maq=Math.round(Math.random()*3);

switch (tu!=maq){
    case ((tu==1 && maq == 3)||(tu==2 && maq == 1)||(tu==3 && maq == 2)):
        console.log("Ganaste");
        break;

    case ((tu==2 && maq == 3)||(tu==3 && maq == 1)||(tu==2 && maq == 1)):
        console.log("Gana la PC");
        break;
    default:
        console.log("Empate");
        break;
}