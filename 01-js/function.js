
// Funciones en JS Declaration o Declarativas

// function saludar(nombre, apellido) {
//     console.log(`Bienvenido ${nombre} ${apellido}`);
// }

// saludar('Ernesto', 'Ledesma');


// // Funciones en JS expression

// const cliente = function(nombreCliente) {

//     console.log(`Mostrando datos del cliente: ${nombreCliente}`)
// }

// cliente('Mauricio Rougier')

function actividad( nombre = 'Walter', actividad = 'Aprendiento Python' ) {
    console.log(`La persona ${nombre}, esta realizando la activad de ${actividad} `)
}

actividad("Juan", "Aprendiendo JS");
actividad("Marisa", "Aprendiendo UXUI");
actividad();


const actividad2 = function( nombre = 'Walter', actividad = 'Aprendiento Python' ) {
    console.log(`La persona ${nombre}, esta realizando la activad de ${actividad} `)
}

actividad("Juan", "Aprendiendo JS");
actividad("Marisa", "Aprendiendo UXUI");
actividad();
