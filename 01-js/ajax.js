
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    const api = `https://randomuse.me/api/?results=${cantidad}&nat=us`;

    // llamda ajax
    const xhr = new XMLHttpRequest();

    // abre la conexion
    xhr.open('GET', api, true);

    // onload
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // send
    xhr.send();

});

console.log(descargarUsuarios(30));