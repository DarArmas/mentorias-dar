function crearContador() {
    let contador = 0; // La variable contador está dentro del ámbito de la función crearContador
    
    function incrementar() {
        contador++; // Accedemos a la variable contador definida en el ámbito superior
        console.log("Contador actual:", contador);
    }

    return incrementar; // Devolvemos la función incrementar, que mantiene acceso al ámbito de crearContador
}

// Creamos dos contadores independientes
let contador1 = crearContador();
let contador2 = crearContador();

// Incrementamos los contadores
contador1(); // Output: Contador actual: 1
contador1(); // Output: Contador actual: 2

contador2(); // Output: Contador actual: 1
contador2(); // Output: Contador actual: 2
contador2(); // Output: Contador actual: 3
