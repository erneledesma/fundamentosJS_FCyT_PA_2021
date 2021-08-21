// Tipos de datos primitivos

let num = 10;
let str = "Esto es un texto";
let bool = true;
let und = undefined;
let nul = null;

let obj = {
    numero: 10,
    nombre: 'Patricio',
    texto: "Esto es un texto",
    pasajes: 'Air',

    objHijo: {
        edad: 20,
        nombre: 'Lucia Perez'
  } 
}
// Notacion por referencia
obj.objHijo.direccion = 3260;

// console.log(obj);
// console.log(obj.nombre);
// console.log(obj.pasajes);
console.log(obj.objHijo.direccion);
console.log(obj)