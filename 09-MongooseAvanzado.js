/********************************POPULATE********************************/
`
Una population implica obtener un documento referenciado dentro de otro
documento, con el fin de obtener ambos en una sola búsqueda.
Consiste en almacenar el id de un documento, como propieda de otro documento.
A esto se le conoce como "referencia".

Populate hace referencia a "poblar" de un id a un documento completo.
(referencia a la población humana).

Como funciona? 

En nuestro schema debemos crear un campo que almacene ObjectsId de otra colección.
EJ. autor:

const chatSchema = new Schema({
    autor: {
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    },
    content: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

Y luego en el manager al momento de buscar por ID uno de esos chats
hacemos uso de la función populate('campo')

async findByID(id){
    return messagesModel.findById({_id: id}).populate('chats.autor')
}
`




/********************************AGGREGATION********************************/
`
Consiste en la realización de múltiples operaciones,
generalmente sobre múltiples documentos.

Pueden utilizarse para:
    - Agrupar documentos con base en un criterio específico.
    - Realizar alguna operación sobre dichos documentos, con el fin de obtener
    un solo resultado.
    - Analizar cambios de información con el paso del tiempo. 


Funcionamiento: 
Los aggregation pipelines consisten en un conjunto de pasos (stages)
donde cada paso corresponderá a una operación a realizar hasta lograr 
el objetivo.

Los documentos resultantes de la stage que finalice, se utilizan como "input"
de la siguiente stage, y así sucesivamente hasta llegar al final.

EJ. Un pipeline de 5 stages.
1) Filtrar los documentos que tengan un valor x mayor a 20.
2) Ordenarlos de mayor a menor.
3) En un campo devolver el valor máximo.
4) En otro campo devolver el valor mínimo.
5) En otro campo la suma total de todos los documentos. 

Ejemplos de stages disponibles en un aggregation pipeline:

    $count: Cantidad de documentos disponibles en el stage actual.

    $group: Permite agrupar los documentos disponibles en nuevos grupos
    según un criterio especificado. Cada grupo cuenta con un _id nuevo, 
    además de los valores acumulados.

    $limit: Limita el número de documentos que saldrán de dicho stage.

    $lookup: Permite realizar un "left join" de una colección de la misma
    base de datos a los documentos de la stage actual. 

    $set / $addFields: Agregan una nueva propiedad a los documentos que se
    encuentren en dicho stage.

    $skip: Devuelve sólo los documentos que se encuentren después del offset
    indicado.

    $sort: Ordena los documentos en la stage actual.

    $match: Devuelve sólo los documentos que cumplan con un criterio de búsqueda,
    podemos colocar filtros comunes aquí.

    $merge: Escribe los resultados del pipeline en una colección. Debe ser la 
    última stage del pipeline para poder funcionar.

    ...existen más.


En el manager correspondiente hacemos lo siguiente:
1) Creamos la función correspondiente del pipeline. 
ej. 
        async findAggregation(){

        }


2) Hacemos uso de la función aggregate.
ej. 
        async findAggregation(){
            const response = await xxxxModel.aggregate( )
            return response
        }


3) Luego seguimos la estructura requerida por aggregate.
ej. 
        async findAggregation(){
            const response = await xxxxModel.aggregate( [  {stages}, {stages}, ...  ] )
            return response
        }


4) Quedando algo como esto.
ej. 
        async findAggregation(){
            const response = await xxxxModel.aggregate( [
                { $match: { calificacion: { $gt: 5 } } },
                { $count : 'total' }
            ] )
            return response
        }

5) response.

        {
            "response: [
                {
                    "total" : 60
                }
            ]
        }

*Ejemplo más completo en el minuto 02:15:50 de la clase.
`


/********************************PAGINACIÓN********************************/
