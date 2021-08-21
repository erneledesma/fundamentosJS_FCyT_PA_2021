
const apiKey = 'D8ORAZvzoGvzmGCWmZhFn8JxPtVW3egZ';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( respuesta => respuesta.json() )
    .then(({ data }) => {

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url

        document.body.append(img)


    })
    .catch(console.error);



