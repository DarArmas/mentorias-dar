'use strict';

//parametros REST y SPREAD


//REST: cuando no se que numero de parametros voy a recibir
function listadoFrutas(fruta1, fruta2, ...resto){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto);
    return true;
}

//listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//SPREAD, cuando le vas a pasar un array de parametros para que me los detecte todos
//y no me meta el array al primer parametro

var frutas = ['Naranja', 'Manzana'];

listadoFrutas(frutas, "Sandia", "Pera", "Melon", "Coco");

// usar ...
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");

