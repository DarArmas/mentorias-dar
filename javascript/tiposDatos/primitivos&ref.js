// Tipos de datos primitivos
let numero = 10; // Number
let texto = "Hola, mundo!"; // String
let esVerdadero = true; // Boolean
let valorNulo = null; // Null
let valorIndefinido; // Undefined

// Tipos de datos de referencia
let arreglo = [1, 2, 3, 4]; // Array
let funcionSuma = function(a, b) { return a + b; }; // Function
const funcionSuma2 = (a,b) => a + b
let fechaActual = new Date(); // Date

// Imprimir los valores en la consola
console.log("Número:", numero);
console.log("Texto:", texto);
console.log("¿Es verdadero?", esVerdadero);
console.log("Valor nulo:", valorNulo);
console.log("Valor indefinido:", valorIndefinido);
console.log("Arreglo:", arreglo);
console.log("Función suma:", funcionSuma(5, 3));
console.log("Función suma flecha:", funcionSuma2(100, 50));
console.log("Fecha actual:", fechaActual);


(function testearRef(){
    let numero = 10;
    let numeroCopy = numero;
    numero = 3;
    let result = numero === numeroCopy;
    console.log('son iguales', result, {numero}, {numeroCopy} );
})();