
const personas = [
    {nombre: 'Pedro', edad: 20, aprendiendo: 'JavaScript'},
    {nombre: 'Maria', edad: 23, aprendiendo: 'UXUI'}, 
    {nombre: 'Marcos', edad: 27, aprendiendo: 'AWS'},
    {nombre: 'Leandro', edad: 30, aprendiendo: 'Python'},
]

console.log(personas);

// Mayores de 25 años

const mayores = personas.filter( persona => {
    return persona.edad > 25
});

console.log(mayores);

// que aprende Leandro
const leandro = personas.find( persona => {
    return persona.nombre === 'Leandro' ;
});

console.log(leandro);