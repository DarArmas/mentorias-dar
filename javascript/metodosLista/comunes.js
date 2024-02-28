let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(numero => numero * numero);

console.log(cuadrados); // Output: [1, 4, 9, 16, 25]

let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares); // Output: [2, 4]

let numeros = [1, 2, 3, 4, 5];
let suma = numeros.reduce((total, numero) => total + numero, 0);

console.log(suma); // Output: 15

let numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero * 2));
// Output:
// 2
// 4
// 6
// 8
// 10

let numeros = [1, 2, 3, 4, 5];
let primerPar = numeros.find(numero => numero % 2 === 0);

console.log(primerPar); // Output: 2