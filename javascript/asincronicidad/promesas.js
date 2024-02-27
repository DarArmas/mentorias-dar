
//Promesas
let a2 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('y');}, 300)
});

let b2 = c2 = d2 = (x2) => new Promise((resolve, reject) => {
    setTimeout(() => {resolve(x2);}, 300);
})

a2.then(b2).then(c2).then(d2).then(console.log).catch(console.error);