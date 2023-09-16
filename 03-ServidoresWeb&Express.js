/*
HTTP
El cliente es el que inicia siempre el protocolo HTTP 
y envia al servidor una peticion (request). El servidor recibe esa petición,
la manipula y hace todo lo que debe hacer para manipular esa petición
y devuelve una respuesta (response).

Definición teórica:
HTTP (Hype Text Transfer Protocol) refiere a un protocolo el cual es un conjunto
de reglas que permite la comunicación entre dos o más sistemas. Gracias a este protocolo, 
las computadoras saben comunicarse entre sí, y permiten comunicarse con servidores para obtención de datos.
(lo podemos ver en todas las páginas que visitamos).

Maneja múltiples peticiones: 
Cuando programamos nuestro servidor, lo hacemos para escuchar peticiones, 
la pregunta es ¿de quién esucchar las peticiones? 
Bajo su configuración por defecto, un servidor puede escuchar múltiples peticiones de múltiples clientes
al mismo tiempo. 

El cliente siempre es quien hace las peticiones (request) y el servidor siempre será quien hace las 
respuestas (response). Cuando hacemos frontend, somos clientes y somos quienes hacemos las peticiones. 
Y cuando hacemos backend, nos toca ser el servidor y programar para dar respuestas.

*03-ServerHttpNativoTest Ejemplo.

Express Js
Es un framework minimalista que permitirá desarrollar servidores más complejos.
Este nos facilitará:
    - Utilizar diferentes rutas para las peticiones.
    - Mejorar la estructura de nuestro proyecto.
    - Manejar funcionalidades más complejas y utilización de middlewares.

*03-ServerExpressTest (Mas info ahí).

Params : - solo se manda información puntual o identificadores únicos (Como ids de usuarios).
Query ? - Ordenamiento, filtrado, cantidad de usuarios a mostrar, etc.

Params devuelve sus valores como un str. Por lo tanto hay que parsearlo si queremos utilizarlo como int (buscar un ID por ejemplo).
Para parsear de str a int podemos hacerlo de 3 maneras: 
    - con un signo +variable
    - con el signo ~~variable
    - con la función parseInt()

Query: se envía la información con la siguiente estructura: 
    ?clave=valor
Como query devuelve un string, no es necesario agregar los '' en la url. 

Códigos de estado HTTP.
Cuando el servidor responde con un código de estado, esto permite saber qué ocurrió
con la consulta que estábamos haciendo, y da información al cliente sobre qué ha ocurrido.
1xx: Status "informativo".
2xx: Status "Ok". (La petición se procesó correctamente desde la consulta hasta la respuesta).                       
    ej. 200 -> Success / OK
3xx: Status de redirección. (Un recurso se ha movido o necesitamos apuntar a otro servicio).
    ej. 301 -> Permanent Redirect
        302 -> Temporary Redirect
        304 -> Not Modified
4xx: Status de error de cliente. (El cliente realiza una petición que no cumpla con las reglas de comunicación (una mala consulta, le faltó enviar un dato, o venía en un formato incorrecto)
    ej. 401 -> Unauthorized Error (El cliente no se ha identificado con el servidor bajo alguna credencial, no puede acceder al recurso).
        403 -> Forbidden (El cliente está identificado pero sus credenciales no tienen el nivel de privilegios suficiente para acceder al recurso.)
        404 -> Not Found (Cuando el recurso no se ha encontrado, ya sea algún dato solicitado o incluso el endpoint mismo.)
        405 -> Method Not Allowed
5xx: Status de error en servidor. (Cuando algo ocurre en el servidor, no necesariamente un error del cliente, sino un error o "detalle" que no haya considerado el servidor al tratar con algún caso.)
        501 -> Not Implemented
        502 -> Bad Gateway
        503 -> Service Unavailable
        504 -> Gateway Timeout


API (Application Programming Interface):
Es un conjunto de definiciones y reglas que permiten que dos equipos puedan integrarse para trabajar juntos.
La mejor analogía que hay para comprender ésto es que una API funge como un "contrato" entre el front y el back.

La API permite entonces que se respondan preguntas como: 
    ¿A qué endpoint debo apuntar para la tarea que necesito? 
    ¿Qué método debo utilizar para ese recurso? 
    ¿Qué información debo enviar para realizar correctamente mi petición?

Ya tenemos las reglas para comunicarse (API), pero cuando hacemos una petición o cuando recibimos una respuesta
ésta debe tener un formato. REST (REpresentational State Transfer) permite definir la estructura que deben tener
los datos para poder transferirse. 
La API respondía a preguntas sobre cómo comunicarse correctamente, sin embargo, REST define cómo debe ser el cuerpo
del mensaje a transmitir (puedes llegar a hablar con el presidente si cumples con el protocolo (HTTP), y las reglas (API),
pero ¿de que nos servirá si la forma en que estructuramos nuestro mensaje (REST) no es correcta?)
Los dos formatos más importantes son JSON y XML. La utilización de la estrctura dependerá de las necesidades del proyecto.
Caracteristica de las APIs REST:
    - Arquitectura Cliente-Servidor sin estado: 
        - Cada mensaje HTTP contiene toda la información necesaria para comprender la petición.
        - Como resultado, ni el cliente ni el servidor necesitan recordar ningún estado de las comunicaciones entre mensajes.
        - Esta restricción mantiene al cliente y al servidor débilmente acoplados: el cliente no necesita conocer los detalles
        de implementación del servidor y el servidor se "despreocupa" de cómo son usados los datos que envía al cliente.
    - Cacheable:
        - Debe admitir un sistema de almacenamiento en caché.
        - La infraestructura de red debe soportar una caché de varios niveles.
        - Este almacenamiento evita repetir varias conexiones entre el servidor y el cliente en caso de que peticiones idénticas 
        fueran a generar la misma respuesta.
    - Operaciones comunes:
        - Todos los recursos detrás de nuestra API deben poder ser consumidos mediante peticiones HTTP,
        preferentemente sus principales (POST, GET, PUT y DELETE).
        - Con frecuencia estas operaciones se equiparan a las operaciones CRUD en bases de datos. 
        - Al tratarse de peticiones HTTP, éstas deberán devolver con sus respuestas los correspondientes códigos de estado
        informando el resultado de las mismas.
    - Interfaz uniforme
        - En un sistema REST, cada acción (más correctamente, cada recurso) debe contar con una URI (Uniform Resource Identifier)
        es decir, un identificador único.
        - Ésta nos facilita el accesso a la información, tanto para consultarla, como para modificarla o eliminarla, pero también
        para compartir su ubicación exacta a terceros.
    

    2:39:44

*/