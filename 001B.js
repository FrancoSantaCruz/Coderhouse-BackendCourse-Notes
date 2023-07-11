/*
    ECMAS07
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// CON .map GENERAMOS UN ARRAY A PARTIR DE OTRO CON NUEVAS MODIFICACIONES.

// const valores = [1, 2, 4, 5, 8, 9]

// const nuevoValores = valores.map( (num, idx) => {
//     console.log(num, idx)

//     return num + 1
// })
// console.log(nuevoValores)


// ESTO ES LO MISMO QUE LA FUNCIÓN DE MÁS ARRIBA PERO QUITAMOS LAS {} Y YA TIENE UN RETURN EXPLICITO EL ARROW FUNCTION.
// const nuevoValores2 = valores.map( (num, idx) => numero + 1)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// CON .includes PUEDO BUSCAR SI UN ELEMENTO SE ENCUENTRA (INCLUYE) EN EL ARRAY.

// const nombres = ['Valentin', 'Carolina', 'Agustin', 'Exequiel', 'Ayelen']
// console.log( nombres.includes('Carolina') )



/*
    ECMAS08
*/

// const impuestos = {
//     iva: 19,
//     renta: 80,
//     carro: 170
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Object.entries() CONVIERTE DE OBJETOS A ARRAYS: { CLAVE: VALOR } -> [ [CLAVE, VALOR] ]
// const parLlaveValor = Object.entries(impuestos)
// console.log(parLlaveValor)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Object.keys() DEVUELVE A PARTIR DE UN OBJETO, UN ARRAY CON LAS CLAVES.
// const llaves = Object.keys(impuestos)
// console.log(llaves)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Object.values() DEVUELVE A PARTIR DE UN OBJETO, UN ARRAY CON LOS VALORES.
// const valores = Object.values(impuestos)
// console.log(valores)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .reduce(callback, ComienzoDeAcumulación) -> PUEDE SERVIR PARA SUMAR O RESTAR TODOS LOS ELEMENTOS DE UN ARRAY.
// const impuestosTotales = valores.reduce((acumulacion, item) => {
//     console.log(`-> ${acumulacion}, ${item}`)
//     return acumulacion - item
// }, 0)

// console.log(`Resultado ${impuestosTotales}`)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



/*
    ECMAS09
*/

// const obj1 = {
//     field11: 222,
//     field22: 'Franco',
//     field33: true,
//     field44: 'Agustin',
//     field66: 666,
// }
// const obj2 = {
//     field1: 'Martu <3',
//     field2: [2, 3, 4, 6, 7]
// }
// const obj4 = {
//     field111: 222,
//     field222: 'wtf',
//     field333: false,
//     field444: 'Gegege',
//     field666: 666,
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// SPREAD OPERATORs
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EL OBJETO NO CAMBIA, SIMPLEMENTE OBTENEMOS ESOS DOS VALORES DEL OBJETO EN UNAS VARIABLES CON EL MISMO NOMBRE DE LA CLAVE.
// const { field22, field44 } = obj1
// console.log(field22, field44)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ... COPIA EL CONTENIDO DE LOS OBJETOS EN UN NUEVO OBJETO
// *si dos elementos se llaman igual en dos objetos diferentes, el último reemplaza al primero.
// const obj3 = { ...obj1, ...obj2}
// console.log(obj3)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// REST OPERATOR
// EN ...rest QUEDAN GUARDADOS TODOS LOS ELEMENTOS RESTANTES DEL OBJETO EN CASO DE QUE PREVIAMENTE SE HAYA DESCONTRACTURADO UNO. 
// const {field111, field333, ...rest } = obj4
// console.log(rest)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
    Dados la lista de objetos anterior:
        - Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades). 
        Consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.   
        - Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
*/
// const objetos = [
//     {
//         manzanas: 3,
//         peras: 2,
//         carne: 1,
//         jugos: 5,
//         dulces: 2
//     },
//     {
//         manzanas: 1,
//         sandias: 1,
//         huevos: 6,
//         jugos: 1,
//         panes: 4
//     }
// ]

// const productos = objetos.reduce((acum, item) => {
//     Object.keys(item).forEach( (element) => {
//         if(!acum.includes(element)){
//             acum.push(element)
//         }
//     })
//     return acum
// }, [])
// console.log(productos)
// const totalProductos = objetos.reduce((acum, item) => {
//     total = 0
//     Object.values(item).forEach( (element) => {
//         total += element
//     })
//     return acum + total
// }, 0)
// console.log(totalProductos)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



/*
    ECMAS10
*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// trim() -> Limpia los espacios del comienzo y final de una cadena de texto.
// let saludos = "               Hola, Soy Franco      "
// saludos = saludos.trim()
// console.log(saludos)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .flat() -> Unifica en un solo array en el caso de que haya una mezcla de arrays anidados
// const arrayAnidado = [1, 4, 12, 52, -1212, 0 , [21, 56, 7, 12], 90, 91, [127, 122]]
// const result = arrayAnidado.flat()
// console.log(result)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



/*
    ECMAS11
*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// El operador || compara el valor de la izquierda, y en caso de ser falso, imprime el derecho. 
// Por ejemplo al ser varTest = 0, 0 es considerado False, por lo tanto, imprime el string siguiente. Es como usar ==.
// Esta clase de operación posee un return implicito. 
// const varTest = undefined
// const varAsignable = varTest || "Sin Valor"
// console.log(varAsignable)

// La diferencia del ?? con el || es que es más estricto. Por ejemplo ya no interpreta 0 como booleano, si no como un valor y lo imprime. 
// Pero si toma como falso a undefined o null. Es como usar ===.
// const varAsignable2 = varTest ?? "Sin Valor"
// console.log(varAsignable2)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PRIVATE VARIABLES
// class Persona {

//     #fullname
//     constructor(name, lastname){
//         name,
//         lastname,
//         this.#fullname = `${name} ${lastname}`
//     }

//     getFullname = () => {
//         return this.#fullname
//     }
// }

// const nicolas = new Persona('nicolas', 'ayala')
// console.log(nicolas.getFullname())
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// HANDS ON LAB - Registrador de tickets de eventos 

class TicketManager{

    #precioBaseDeGanancia
    constructor(){
        this.events = []
        this.#precioBaseDeGanancia = 1.15
    }

    getEvents = () => this.events

    addEvent = (name, place, price, capacity, fecha) => {
        const event = {
            name,
            place,
            price: price * this.#precioBaseDeGanancia,
            capacity: capacity ?? 50,
            fecha: fecha ?? new Date().toLocaleDateString(),
            participantes: []
        }

        this.events.push(event)
    }
}

const manager = new TicketManager()
manager.addEvent('Lollapalooza', 'Buenos Aires', 15000, 10, '')
manager.addEvent('Lollapalooza2', 'Buenos Aires', 15000, 10, '')
manager.addEvent('Lollapalooza3', 'Buenos Aires', 15000, 10, '')
manager.addEvent('Lollapalooza4', 'Buenos Aires', 15000, 10, '')
console.log(manager.getEvents())