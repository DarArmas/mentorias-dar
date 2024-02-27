// Callback Hell" o "Pyramid of Doom"

//Pasar la misma variable por varios callbacks
let a = callback => {
    setTimeout(() => { callback('y');} , 300);
}

//Asignar mas de una funcion a una misma variable
let b = c = d = (x, callback) => {
    setTimeout(() => { callback(x); }, 300);
}

a(resultadoDeA => {
    //es como si aqui se ejecutar el setTimeout....
    b(resultadoDeA, resultadoDeB => {
        c(resultadoDeB , resultadoDeC => {
            d(resultadoDeC, resultadoDeD => {
                console.log(resultadoDeD)
            })
        })
    })
})

