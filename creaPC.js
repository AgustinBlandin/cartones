function creaPC(marca, procesador, DiscoDuro, menRAM, anho){
    this.marca=marca;
    this.procesador=procesador;
    this.DiscoDuro=DiscoDuro;
    this.menRAM=menRAM;
    this.anho=anho;
}

var listaPC = []
for (var i = 1; i < 12;i++){
    listaPC.push( new creaPC(
        "Dell",
        "E"+i+Math.round(Math.random()*999),
        2**i,
        i,
        2010+i
    )
    )
}

//listaPC.push(  new creaPC("Dell", "E1763", 2, 1, 2010) )

console.log(listaPC)