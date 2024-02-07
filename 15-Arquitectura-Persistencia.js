`                         DAO (Data access object)                      `/*

Dao se encargará de conectar con nuestra fuente de datos según la hayamos
programado, habrá DAOs programados para hacer CRUD en memoria, DAOs para
hacer CRUD en archivos, etc. 

Así, en la lógica de negocio sólo se necesita importar el DAO a trabajar y
utilizarlo. Si en algúin momento necesitamos cambiar de persistencia
bastará con cambiar el DAO. 

persistence: 
    - DAOs
        - mongoDAO
            - mongo managers.
        - memDAO
            - memory managers.
        - fileDAO
            - fs managers.
    - DB
        - db.config.js
        - models

*/

`                              PATRÓN FACTORY                           `/*

Se basa en una variable de entorno o configuración por argumentos, la cual
tomará para decidir qué tipo de persistencia manejar.
Esta "Fábrica" se ecnargará de devolver sólo el DAO que necesitemos acorde
con lo solicitado en el entorno o los argumentos. 

Pasos ó síntesis: 
    - Modificamos el archivo package.json creando scripts con argumentos 
    descriptivos a nuestro gusto. Por ej: 
        "start:mem": "nodemon src/app.js MEM",
    - Luego creamos un archivo que llevará la lógica del dinamismo en la 
    carpeta de persistencia. 
    En el mismo importaremos ambos DAOs y estaremos guardando en una 
    variable el valor que el script manda al momento de iniciar el SV.
    > const persistencia = process.argv[2];

    Luego con un switch podemos decidir que según lo enviado por argumento
    opte por una persistencia o la otra: 
    switch(persistencia){
        case "MEM":
            toysManager = new ToysMem();
            break;
        case "FILE":
            toysManager = new ToysFile();
            break;
        default: 
            // MongoDAO
            break;
    }

    Y luego lo exportamos a nuestros servicios los cuales utilizarán de 
    manera genérica cualquier persistencia que se elija. 

*/

`                         DTO (Data Transfer object)                    `/*

Nuestro servidor tiene dos retos cuando se trata de trabajar con datos:
    - Enfrentarse a los datos que vienen por parte del cliente.
    - Enfrentarse a los datos que devuelve la base de datos.

Para cualquiera de los dos casos, tenemos que tener contemplados 
escenarios en los que necesitamos mantener una "estructura" de los datos 
que estamos trabajando.

DTO es un patrón de diseño que sirve para resolver casos en los que existe
este factor de "incertidumbre" en el que no sabemos si los datos serán 
siempre consistentes, ya sea en existencia o en tipo de dato. Además, 
nos permite transformar la información y crear un dato antes de 
transferirlo. 

*/

`                         DATOS UTILES DE LA CLASE                      `/*

La estructura de carpetas también se puede llevar a cabo de la sig manera:

> src
    > controllers
    > daos
    > services
        > business
        > orders
        > users
            > find-all-users.service.js
            > find-user-by-id.service.js
            > errors
                > user-not-found.error.js
                > missing-information.error.js

*/