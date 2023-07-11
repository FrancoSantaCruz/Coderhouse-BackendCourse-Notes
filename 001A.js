    
    /*********** array.FIND() ***********/

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




    /*********** Const & Let ***********/

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




    /*********** functions ***********/

function miNombre(name, lastname){
    let varInterna = 123

    console.log("Saludos a ", name)
    return varInterna
}
console.log(miNombre(Franco))




    /*********** Hands On Lab ***********/

const arr = [
    {'id': 1, 'Producto': "Manzana"},
    {'id': 2, 'Producto': "Banana"},
    {'id': 3, 'Producto': "Pera"},
    {'id': 4, 'Producto': "Limon"}
]

function mostrarLista(arr){
    if(arr.length > 0){
        arr.forEach(e => {
            console.log(e)
        });
        return `La lista tiene un total de ${arr.length} elementos.`
    } else {
        return "Lista vacía"
    }
}
console.log(mostrarLista(arr))

const mostrarLista2 = arr => {
    if(arr.length == 0) return "Lista2 vacía"

    arr.forEach(e => {
        console.log(e)
    })

    return `La lista2 tiene un total de ${arr.length} elementos.`
}

console.log(mostrarLista2([]))

const mostrarLista3 = arr => arr.length == 0 ? "Lista3 vacía" : arr.forEach( e => console.log(e) ) 

console.log(mostrarLista3(arr))





    /*********** Clases ***********/

class Persona {
    constructor(nombre) {
        this.nombre = nombre
        this.age = 30
    }

    speak() {
        console.log("Mi nombre es", this.nombre)
    }
}

let javier = new Persona('Javier')
let martin = new Persona('Martin')

javier.speak()
martin.speak()




    /*********** Hands on Lab (Clases) ***********/

class Contador {
    constructor(nombre) {
        this.nombre = nombre
        this.counter = 0
    }

    
    //Variable estática, lo que hace es tener el mismo valor en todas las instancias.
    static count_global = 0 

    getUser = () => this.nombre
    getCount = () => this.counter
    getAll = () => `${this.nombre}:${this.counter}. Global var: ${Contador.count_global}`
    count = () => {
        this.counter++
        Contador.count_global++
    }
}

const ej1 = new Contador('Franco')
const ej2 = new Contador('Agustin')
const ej3 = new Contador('SCz')

ej1.count()
ej1.count()
ej1.count()

ej2.count()

console.log(ej1.getAll())
console.log(ej2.getAll())
console.log(ej3.getAll())