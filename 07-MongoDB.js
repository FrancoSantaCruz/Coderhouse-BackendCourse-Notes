/*
Bases de datos:
    - Relacionales. (SQL) -> Utilizan SQL como lenguaje principal para desarrollar sus funcionalidades.
    - No relacionales. (noSQL) -> Los que no

Una vez que entendimos que la base de datos nos sirve para mantener 
los datos organizados, toca entender cuándo utilizar un modelo relacional
o un modelo no relacional: 

    - Una base de datos RELACIONAL refiere a estructura, relación
    dependencia y de cambio controlado.

    - Una base de datos NO RELACIONAL refiere a algo menos estructurado
    con relaciones y dependencias más flexibles, y de cambios 
    sumamente rápidos.

Modelos relacional:
    - Refiere a modelos de datos donde se requieren estructuras
    más firmes y estrictas sobre los datos.
    Además, se utilizan en datos más controlados.
    - Se basan en tablas, columnas y filas para gestionar sus datos.
    - Permiten conectar las tablas a partir de "relaciones" basadas 
    en llaves primarias y foráneas. 


Modelos no relacional:
    Se desarrolla un modelo donde los datos sean más flexibles, 
    tanto en estructura, como en asociación.
    Todo esto con el fin de crear datos pensados para desempeño,
    no para consistencia inmediata.

    La flexibilidad de los datos lo hace considerablemente más rápido
    en cuando a su accesibilidad.
    Puede basarse en: 
        a) Clave valor
        b) Documentos
        c) Gráficos
        d) Memoria

    Son bases de datos muy útiles para organizar y gestionar informacion
    no estructurada, o cuando no se tiene una noción clara de los datos
    a almacenar.
    Alto grado de escalabilidad y de performance. 
    No utiliza SQL como lenguaje
    Algunos sistemas No SQL son:
        MongoDB
        Redis
        DynamoDB

     
 ______________________________________________________________________________________________________________
|                                                         |                                                    |
|                    Modelo Relacional                    |               Modelo No Relacional                 |
|_________________________________________________________|____________________________________________________|
|                                                         |                                                    |
|  Cuando el volumen de os datos no crece, o bien lo hace |  Cuando el volumen de los datos crece rapidamente  |
|                       poco a poco                       |                                                    |
|                                                         |                                                    |
|    Cuando las necesidades del proceso pueden atenderse  |  Cuando las necesidades del proceso son tan altas  |
|                   en un solo servidor                   |        y tan constantes, que se requieren          |
|                                                         |               multi-servidores                     |
|                                                         |                                                    |
|     Cuando no existen picos de uso por parte de los     |  Cuando los usuarios saturan el sistema y generan  |
|            usuarios que utilizan el sistema.            |                 "picos de uso"                     |
|_________________________________________________________|____________________________________________________|

MongoDB es: 
    - Una base de datos no relacional orientada a documentos. 
    - En lugar de tablas, opta por utilizar colecciones.
    - Cada documento que ingresamos a una colección puede tener diferente estructura.
    - Puede utilizarse en modo local o en la nube.

    Caracteristicas:
        - Almacena datos en documentos flexibles similares a JSON: la estructura
        de datos se puede cambiar con el tiempo.
        - El modelo de documento se asigna a los objetos en el código de su 
        aplicación para facilitar el trabajo con los datos.
        - Las consultas ad hoc, la idexación y la agregación de tiempo real 
        ofrecen maneras potentes de acceder a los datos y analizarlos.
        - MongoDB es una base de datos distribuida en su núcleo, por lo que la 
        alta disponibilidad, la escalabilidad horizontal y la distribución 
        geográfica están integradas y son fáciles de usar. 
        - MongoDB es de uso gratuito. 

    Documentos:  
        Una de las grandes ventajas de un documento es que éste se basa en el
        concepto de clave-valor.
        No son porpiamente un "objeto" como para llamarlos de tal forma, sino 
        que MongoDB trabaja con una extensión de los archivos conocidos como BSON. 
        Esto es lo que realmente permanece en la base de datos.
        Los esquemas de una base de datos en MongoDB, con ayuda de elementos 
        como mongoose, son fácilmente manipulables, ya que permite definirlos con 
        una estructura casi idéntica a la de un objeto.

    SQL Tabla -> Coleccion MongoDB
---------
    MongoDB shell: 

    mongo> show dbs 
        Muestra las bases de datos locales creadas actualmente. 
        (Por default vienen creadas las db admin, config y local)

    mongo> use [nombre] 
        Sirve para posicionarnos en la DB que querramos trabajar
        y en caso de no existir el nombre que pusimos, creará una con ese nombre.

    [db_nombre]> db.createColletion("[nombre_colec]")
        Crear una colección dentro de la DB. 

    [db_nombre]> db.[nombre_colec].drop()
        Eliminar una colección en la DB.

    [db_nombre]> show collections
        Muestra todas las colecciones que hay dentro de la DB.

    [db_nombre]> db.[nombre_colec].renameCollection("[new_name]")
        Renombrar una collección.

    [db_nombre]> db.[nombre_colec].estimatedDocumentCount()
        Devuelve cuantos documentos hay en esa collección. (int)
    
    Comandos básicos CRUD: 
    CREATE:
        db.collection.insertOne(doc)
            Agrega un nuevo documento a la coleccción seleccionada.

        db.collection.insertMany(docs)
            Agrega múltiples documentos a la colección seleccionada
            (dado un arreglo de documentos)

    READ:
        db.collection.findOne(opt)
            Busca un elemento que cumpla con los criterios de búsqueda (opt)
            devuelve el primer documento que cumpla con dicho criterio.

        db.collection.find(opt)
            Devuelve todos los documentos que cumplan con dicho criterio.

        db.collection.find(opt).pretty()
            Añadido para hacer más presentables los resultados de un find()


    Filtros (.find()):
        Los filtros se agregan dentro del os elementos de criterio (opt)
        con ayuda del símbolo $, además podemos agregar más de un filtro
        para asegurarnos que el documento se ajuste a criterios muy 
        específicos. 
        db.coll.find({key:{$operator:val}})

        $and: Realiza operación AND -> {$and: [ {}, {} ]}
        $or: Realiza operación OR -> {$or: [ {}, {} ]}
        $lt: Coincide con valores menores que un valor especificado -> {clave:{$lt:valor}}
        $lte: Coinicide con valores menores o iguales a un valor especificado
        $gt: Coincide con valores mayores a un valor especificado
        $gte: Coincide cocn valores mayores o iguales a un valor especificado
        $ne: Coincide con valores que no son iguales a un valor especificado.
        $eq: Selecciona los documentos que son iguales a un valor especificado.
        $exists: Selecciona los documentos según la existencia de un campo
        $in: Selecciona los documentos especificados en un array -> {key:{ $in:[array of values] }}
        $nin: Coincide con ninguno de los valores especificados en un array.
        $size: Coincide con el número de elementos especificados.
        $all: Coincide con todos los valores definidos dentro de un array.
        $elemMatch: Coincide con algún valor definido dentro del query. 

        Proyecciones: 
            Cuando no necesitamos toda la información de un documento y queremos
            traer solo ciertas propiedades utilizamos proyecciones. 
            db.[collection].find({}, {name:1})
            Siempre se pone la proyección como segundo parámetro del find. 
            Como el ID trae por default si o si, podemos poner: 
            db.[collection].find({}, {name:1,_id:0})
            para que no lo traiga.

        Sort: 
            Sirve para poder hacer un ordenamiento de la información. 
            El ordenamiento se define con 1 o -1 para hacer el ordenamiento
            ASC o DESC respetivamente. 
            Sintaxis: db.[collection].find().sort({val_A:1, val_B:-1})
            La razón por la cual podemos agregar múltiples valores de ordenamiento
            es en caso de que dos documentos tengan el mismo valor, podamos 
            ordenarlos bajo otro criterio.

        Skip y Limit:
            *Skip: Omite el número de documentos indicados: podemos usarlo 
            cuando hagamos paginaciones, cuando necesitemos ignorar un valor
            que sabemos que es innecesario, etc. 
                find().skip(offset)

            *Limit: Limita el número de documentos devueltos. De manera que
            podamos hacer diferentes niveles de paginación (Tu página puede
            devolver 5 elementos por página, o bien 100, depende de cada uno).
                find().limit(num)

    UPDATE:
        db.[collection].updateOne(query, update, option)
            *query: sirve para filtrar qué elementos actualizar 
            (usa los filtros iguales al find)
            *update: Apartado para indicar qué actualizar de los documentos
            que cumplen con el filtro. Update tiene sus propios operadores
            como $set, $unset, $inc, $rename, $mul, $min, $max
                -({find_object}, {$set: {year:2006, name: "Franco"} })
                -({find_object}, {$unset: {year: 1} })
                -({find_object}, {$rename: {year:"date"} })
                -({find_object}, {$inc: {year}:5 })
                -({find_object}, {$mul: {price: NumberDecimal("1.25"), qty:2} })
                -({find_object}, {$min: {imdb:5} })
                -({find_object}, {$max: {imdb:8} })
                -({find_object}, {$currentDate: {lastModified: true} })
                -({find_object}, {$currentDate: {lastModified: {$type: "timestamp"}} })
            *option: Opciones a tomar en cuenta para la actualización
            (como upsert, que inserta el valor en caso de que el documento
            a actualizar ni siquiera exista).

        
Ej DB -> [{first_name:"Franco", last_name:"Santa Cruz", edad: 24},{first_name:"Agustin", last_name:"Morante"},{first_name:"Martin", last_name:"Andes", edad: 38 },{first_name:"Jose", edad: 27 },{first_name:"Martina", last_name:"Piedrabuena", ciudad: "Resistencia" },{first_name:"Lilian", last_name:"Aguero", edad: 64 },{first_name:"Barbara", last_name:"SCz"}]
*/

