let listaOriginal = { tareas: ['Tarea 1', 'Tarea 2'] };
let listaModificada = JSON.parse(JSON.stringify(listaOriginal)); // Copia profunda del objeto original

// El usuario modifica la lista modificada
listaModificada.tareas.push('Tarea 3');

function haHabidoCambios(listaOriginal, listaModificada) {
    // Comprobamos si son el mismo objeto en memoria
    console.log(listaModificada, listaOriginal)

    if (listaOriginal === listaModificada) {
        console.log("No se han realizado cambios.");
    } else {
        console.log("Se han realizado cambios.");
    }
}

haHabidoCambios(listaOriginal, listaModificada); // Se han realizado cambios.
