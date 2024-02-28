var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    //un elemento del json puede ser una funcion
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color
        //es lo mismo
        this.color = nuevo_color; 
        console.log(this);
    }
};

console.log(bicicleta);