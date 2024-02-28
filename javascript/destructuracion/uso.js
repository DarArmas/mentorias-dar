// Destructuración de arreglos
let numeros = [1, 2, 3, 4, 5];
let [primerNumero, segundoNumero, ...restoNumeros] = numeros;

console.log(primerNumero); // Output: 1
console.log(segundoNumero); // Output: 2
console.log(restoNumeros); // Output: [3, 4, 5]

// Destructuración de objetos
let persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
let { nombre, edad, ciudad } = persona;

console.log(nombre); // Output: 'Juan'
console.log(edad); // Output: 30
console.log(ciudad); // Output: 'Madrid'

// Asignación con nombres de variable diferentes
let { nombre: primerNombre, edad: años, ciudad: ciudadNatal } = persona;

console.log(primerNombre); // Output: 'Juan'
console.log(años); // Output: 30
console.log(ciudadNatal); // Output: 'Madrid'

// Destructuración con valores predeterminados
let { telefono = 'No disponible' } = persona;
console.log(telefono); // Output: 'No disponible'

