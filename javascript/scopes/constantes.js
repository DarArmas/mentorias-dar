const PI = 3.14159; //Cuando declaras una variable con const, debes asignarle un valor en el momento de la declaración. Después de eso, no puedes reasignarle otro valor.

//block scope
if (true) {
    const mensaje = "Hola, mundo!";
    console.log(mensaje); // Output: Hola, mundo!
}
console.log(mensaje); // Error: mensaje is not defined


const PI = 3.14159;
PI = 3.14; // Error: Assignment to constant variable.


const persona = { nombre: "Juan", edad: 30 };
persona.edad = 31; // Esto es válido
persona = { nombre: "Ana", edad: 25 }; // Error: Assignment to constant variable.
