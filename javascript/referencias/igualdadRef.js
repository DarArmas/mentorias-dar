//VALORES PRIMITIVOS <- comparan valor

// ==
1025 == "1025" //true

///simbolos <- compara tipos
1025 === "1025" //false


//OBJETOS <- comparan referencia

let a = {};
let b = a;

a == {} //falso
a == b //true


let listaOriginal = { tareas: ['Tarea 1', 'Tarea 2'] };
let listaModificada = listaOriginal; // Hacemos referencia a la misma lista

// El usuario modifica la lista
listaModificada.tareas.push('Tarea 3'); //Modifica ambas referencias

const haHabidoCambios = (listaOriginal, listaModificada) => {
    // Comprobamos si son el mismo objeto en memoria
    console.log(listaModificada, listaOriginal)
    if (listaOriginal === listaModificada) {
        console.log("No se han realizado cambios.");
    } else {
        console.log("Se han realizado cambios.");
    }
}

haHabidoCambios(listaOriginal, listaModificada); // Se han realizado cambios.

