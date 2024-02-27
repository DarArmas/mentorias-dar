let a = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('y');}, 300 );
})

let b = c = d = (x) => new Promise((resolve, reject) => {
    setTimeout(() => { resolve(x); }, 300);
});

// Immediately Invoked Function Expression
// que es una función que se declara y se ejecuta inmediatamente después de su definición. 
(async function empezar() {
    let resultadoDeA = await a();
    let resultadoDeB = await b(resultadoDeA);
    let resultadoDeC = await c(resultadoDeB);
    let resultadoDeD = await d(resultadoDeC);
    console.log(resultadoDeD);
})();

async function empezar() {
    let resultadoDeA = await a();
    let resultadoDeB = await b(resultadoDeA);
    let resultadoDeC = await c(resultadoDeB);
    let resultadoDeD = await d(resultadoDeC);
    console.log(resultadoDeD);
}

empezar();