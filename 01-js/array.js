// Arreglos y map

const carrito = [ 'Producto1', 'Producto2', 'Producto3'];

// console.log(carrito)

// const appContenedor = document.querySelector('#app');

// let html = '';

// carrito.forEach( producto => {
//     html += `<li>${producto}</li>`
// });

// appContenedor.innerHTML = html;

// carrito.map( producto => {
//     console.log( `El producto es ${producto}`)
   
// })

let lenguajes = ['JS', 'PHP', 'Python'];
let framework = ['ReactJS', 'Angular', 'DJango'];

// let combinacion = lenguajes.concat(framework);


//Spread Operator
// let combinacion =[ ...lenguajes, ...framework];
// console.log(combinacion);

let [ultimo] =[...lenguajes].reverse();

console.log(lenguajes);
console.log(ultimo);