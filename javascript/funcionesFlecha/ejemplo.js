const numeros = [1, 2, 3, 4, 5];

// Utilizando una función tradicional como función de devolución de llamada
const cuadrados1 = numeros.map(function(numero) {
    return numero * numero;
});
console.log(cuadrados1); // Output: [1, 4, 9, 16, 25]

// Utilizando una función flecha como función de devolución de llamada
const cuadrados2 = numeros.map(numero => numero * numero);
console.log(cuadrados2); // Output: [1, 4, 9, 16, 25]
