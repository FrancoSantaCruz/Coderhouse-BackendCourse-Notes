/***************
 ****ECMAS07****
 ***************/

//  .map GENERA UN NUEVO ARRAY A PARTIR DE OTRO ARRAY SIN MODIFICAR EL INICIAL.
// const valores = [1, 2, 3, 5, 6, 7, 12]
// const nuevoVal = valores.map((num, idx) => {
//     console.log(num, idx)
//     return num +1
// })

// ** PARA HACER POTENCIACIÓN
// const test = valores.map( (n, idx) => n**idx)
// console.log(test)

// .includes DEVUELVE TRUE EN CASO DE QUE EXISTA EN EL ARRAY LA PALABRA PASADA POR PARÁMETRO.
// ES CASE SENSITIVE Franco != franco
// const nombres = ['franco', 'agustin', 'santa', 'cruz', 'morante']
// console.log( nombres.includes('franco') )

// let username = "FRANCO"
// nombres.includes(username.toLowerCase()) ? console.log("Se encuentra en la lista, puede pasar") : console.log("Vola de acá pibito")


/***************
 ****ECMAS08****
 ***************/

// const impuestos = {
//     iva: 19,
//     renta: 80,
//     auto: 170
// }

// Object.entries() GENERA A PARTIR DE UN OBJETO, UN ARRAY CUYO CONTENIDO 
// SON LAS LLAVES Y VALORES SEGMENTADOS EN ARRAYS.
// ej. [ [ 'iva', 19 ], [ 'renta', 80 ], [ 'auto', 170 ] ]
// const parLlaveValor = Object.entries(impuestos)
// console.log(parLlaveValor)

// Object.keys() DEVUELVE LAS CLAVES/LLAVES/KEYS DEL OBJETO
// const llaves = Object.keys(impuestos)
// console.log(llaves)

// Object.values() DEVUELVE LOS VALORES/VALUES DEL OBJETO
// const valores = Object.values(impuestos)
// console.log(valores)

// .reduce((acumulador, elemento) => {})
// EN CADA REITERACIÓN, GUARDA EN EL PRIMER PARAMETRO (acumulador) EL RETORNO DEL ELEMENTO ACTUAL DEL ARRAY.
// ES DECIR: acumulacion = acumulacion + elemento
// Y SE REPITE HASTA QUE TERMINE TODO EL ARRAY.
// const impuestosTotales = valores.reduce((acc, i) => {
//     console.log('->', acc, i)
//     return acc + i
// }, 0)
// console.log(impuestosTotales)



/***************
 ****ECMAS09****
 ***************/

// const obj1 = {
//     field1 : 123,
//     field2 : 'Franco',
//     field3 : false,
//     field4 : null,
//     field6 : 666,
// }
// const obj2 = {
//     field11 : 'Agustin',
//     field22 : [2, 4, 6, 15]
// }

// const { field2, field3 } = obj1
// console.log(field2, field3)

// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

// const { field1, ...rest} = obj1
// console.log(rest)



/***************
 * HANDS ON LAB *
 ***************/

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]


