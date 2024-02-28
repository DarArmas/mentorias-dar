
function obtenerPrimerElemento<T>(arr: T[]): T {
    return arr[0];
}

function obtenerPrimerElementoAny(arr: any[]): any {
    return arr[0];
}

let palabras: string[] = ["Hola", "Mundo"];

let palabrasResult = obtenerPrimerElementoAny(palabras);

let numeros: number[] = [1, 2, 3, 4, 5];
let primerNumero: number = obtenerPrimerElemento(numeros); // primerNumero es de tipo number

let primeraPalabra: string = obtenerPrimerElemento(palabras); // primeraPalabra es de tipo string


let numerosAny: any[] = [1, 2, 3, 4, 5];
let primerNumeroAny: any = obtenerPrimerElementoAny(numerosAny); // funciona porque el arreglo de tipo any

console.log(palabrasResult)