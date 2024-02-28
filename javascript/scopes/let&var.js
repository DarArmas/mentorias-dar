function ejemploScope() {
    if (true) {
        var x = 10;
        var y = 20;
    }
    console.log(x); // Salida: 10 (var está disponible fuera del bloque)
    console.log(y);
}



//Hoisting
function ejemploHoisting() {
    console.log(x); // Salida: undefined (hoisting de var)
    var x = 10;
    
    console.log(y); // Error: Cannot access 'y' before initialization
    let y = 20;
}


ejemploScope();
ejemploHoisting();