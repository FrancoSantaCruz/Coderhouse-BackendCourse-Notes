/*** array.FIND() ****/

const array = [
    { id: 1, name: "Franco"},
    { id: 2, name: "Agustin"},
    { id: 3, name: "Santa"},
    { id: 4, name: "Cruz"}
]

let student = array.find( (est) => {
    let found = est.id === 3
    return found
})

// Cuando es una sola condición, hay un return implicito
let student2 = array.find( s => s.id ===3 )

console.log(student)
console.log(student2)


/*** Const & Let ***/
const i = 1
i = 0
// Esto da error porque no se puede modificar una constante.
// Pero: 

const persona = {
    nombre : 'Franco',
    apellido : 'Santa Cruz',
    edad : 24
}
persona.edad = 25

// Si permite modificar su contenido. Una cosa es que sea mutable y otra es que sea reasignable.
// Lo que no permitiría es que el diccionario persona cambie de nombre. 

// 03:21:39
