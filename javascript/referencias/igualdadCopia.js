// n (...) solo realiza una copia superficial. Esto significa que si el objeto original tiene propiedades que son objetos o arrays, esas propiedades seguirán siendo compartidas entre la copia y el original.

let listaOriginal = { tareas: ['Tarea 1', 'Tarea 2'] };
let listaModificada = { ...listaOriginal }; // Creamos una copia independiente del objeto original

listaModificada.tareas.push('Tarea 3'); //Modificar copia

let objetoOriginal = { nombre: "Juan", edad: 30 };
let objetoModificado = { ...objetoOriginal }; // Crear una copia independiente del objeto original

objetoModificado.edad = 31;


function haHabidoCambios(objetoOriginal, objetoModificado) {
    // Comprobamos si son el mismo objeto en memoria
    console.log(objetoModificado, objetoOriginal)

    if (objetoOriginal === objetoModificado) {
        console.log("No se han realizado cambios."); //No es real!!!!
    } else {
        console.log("Se han realizado cambios.");
    }
}

haHabidoCambios(listaOriginal, listaModificada); // No han habido cambios
haHabidoCambios(objetoOriginal, objetoModificado); // Han habido cambios

