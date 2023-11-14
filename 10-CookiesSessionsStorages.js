/**************************************** COOKIES ****************************************/`
La necesidad de saber información del cliente:
    Cuando desarrollamos un sitio web, tenemos que contemplar que la forma de interactuar 
    de un cliente suele ser diferente entonces es importante tener algún recurso para saber 
    información sobre ciertos detalles de información y comportamiento de un cliente, para 
    que el servidor pueda usar eso a su favor. 

    ¿Cómo podemos seguir un rastro de los clientes de nuestro sitio web y poder obtener un 
    poco más de información de contacto y/o de comportamiento sobre los clientes que nos 
    visitan?
    Con las COOKIES.


¿Qué es una cookie?
    Una cookie es un pequeñísimo archivo de texto donde podremos almacenar información 
    dentro del navegador, de manera que pueda viajar entre las peticiones y sirva como un 
    ligero contenedor de información necesaria para poder procesar ciertas peticiones. 
    Algunos de los datos que se suelen guardar en una cookie son: 
        - Nombres de usuario
        - IDs de sesiones
        - Preferencias de navegación para tu página.

Caracteristicas: 
    - Las cookies se les puede configurar un tiempo de vida. Una vez finalizado el mismo, 
    la cookie se elimina del navegador.
    - Al almacenarse del lado del cliente, el espacio con el que se cuenta es limitado, 
    por lo que se recomienda elegir de forma adecuada lo que se vaya a guardar como cookie.
    - Podemos asignarles claves secretas para poder aumentar la seguridad.
    - Viven en el navegador, así que no guardamos datos sensibles.


Comenzando a utilizar cookies
    Partimos de instalar express y el módulo de cookie-parser 
    > npm  install express
    > npm  install cookie-parser

    Posteriormente, siguiendo la arquitectura que hemos hecho en previos proyectos, 
    configuraremos nuestro servidor: utilizaremos el middleware con app.use() 

        import cookieParser from 'cookie-parser';
        app.use(cookieParser());


Setear una cookie
    Una cookie debe setearse dentro del flujo de vida de una petición, por lo tanto, 
    llamaremos un endpoint llamado /setCookie donde utilizaremos el objeto res para 
    poder asignar una cookie al cliente en su navegador.

    Para leer la cookie seteada, utilizaremos el objeto req en el endpoint (getCookies)
    ya que como el cliente tiene la cookie en su navegador, deberá enviarla por dicho 
    objeto.

    Además, llamaremos también un endpoint llamado /deleteCookie donde utilizaremos el 
    objeto res, para poder limpiar la cookie asignada al cliente en su navegador. 

    Ej. 
    app.get('/set-cookie', (req, res) => {
        res.cookie('language', 'EN-US').json({msg:"Success"});
    });
    
    app.get('/get-cookie', (req, res) => {
        const { language } = req.cookies;
        language == 'EN-US' ? res.send(req.cookies.language) : res.send('ES-AR')
    });
    
    app.get('/delete-cookie', (req, res) => {
        res.clearCookie('language').send('Your currently language is the default one.')
    })


Signed Cookies
    Como las cookies son almacenadas en el navegador, pueden llegar a ser alteradas 
    mucho más fácilmente que si ésta viviera en el servidor. Es por ello que 
    necesitamos agregar un factor de seguridad para que la cookie se "invalide"
    en caso de que haya sido modificada.
    No podemos evitar que alguien externo altere la cookie, pero sí podemos indicar
    que, en caso de que la cookie ya no sea exactamente idéntica a la generada
    entonces la pase como cookie inválida. 

    No es necesario instlar algo nuevo, solo configuraremos la inicialización del 
    cookieParser. Esto se conseguirá agregando un "secret" al momento de la 
    inicialización. 
    Si inicializamos:
        app.use(cookieParser("abc123@"));

    Podremos firmar las cookies para mayor seguridad a partir de la lógica planteada
    solo basta colocar un {signed:true} en la definición de la cookie:
        app.get('/setSignedCookie', (req,res) => {
            res.cookie('SignedCookie', 'Esta cookie está siendo firmada', {maxAge:10000, signed:true}).send({msg:"Signed"})
        })


    * Para poder acceder a una signed cookie, éstas ya no estarán disponibles en 
    req.cookies, sino en req.signedCookies, por lo que hay que pensar bien qué
    cookies corresponderán a qué lado.

    * Si tratamos de acceder a una cookie firmada que fue alterada por alguna razón
    al querer acceder a ella solo se devolverá un false.

`

/**************************************** SESSIONS ****************************************/`

    El sistema de sesiones permitirá que el servidor tenga almacenada información referente
    al cliente, con el fin de que éste pueda mantenerse identificado al momento de hacer las peticiones. 
    Una vez que el cliente pase por un proceso de login, podemos procesar esa información para mantener
    reconocido al cliente y poder brondarle respuestas particulares acorde con su rol en la página.

    FLujo:

    Hacemos un login        A dicha identidad de usuario              Desde el backend 
     (el usuario se    -->    se le asigna un sessionID      -->     se guarda en cookies
       identifica)                                                    dicha sessionID


Session como módulo de node
    Session permite conseguir este almacenamiento de informacióon de cliente. Este podremos utilizarlo
    a través del elemento req.session .
    Algunas características de session son: 
        - La información que se quiera guardar en session se almacena del lado del servidor.
        - Del lado del cliente, se crea un identificador único para poder acceder a esa información
        desde el navegador.
        - Los datos almacenados en session se borran al cerrar la ventana del navegador. 
        - Se utiliza principalmente para guardar los datos de usuario al iniciar sesión.


Instalar
    > npm i express-session


En síntesis
    Tendremos una colección llamada Sessions donde al momento de registrar un usuario
    guardaremos el email en dicha colección, por lo que se le generará un ID. 
    Ese id va a ser nuestro sessiónID que luego será guardado en las cookies del usuario para comparar
    con el de la base de datos. 
    Session -> Back
    Cookie -> Navegador


SESSION -> FILE SYSTEM
(Utilizando File Storage)
    Partiremos de hacer la instalación habitual con npm con el comando: 
    > npm install session-file-store

    Y luego incializamos con los tres argumentos principales: path, ttl y retires.

    import FileStore from 'session-file-store'; 
    import session from 'express-session';

    const fileStorage = FileStore(session);
    app.use(session({
        store: new fileStorage({path:'./sessions', ttl:100, retries:0}),
        secret:"asdasd",
        ...
    }))


SESSION -> MongoDB
    Session puede trabajar de la mano con MongoDB y MongoAtlas para poder guardar una sesión en una 
    base de datos, esto permitirá que las sesiones tengan una gestión más limpia y además de poder
    contar con autoeliminación de sesiones expiradas.

    Partiremos de hacer la instalación habitual con npm con el comando:
    > npm install connect-mongo

    *IMPORTANTE: una cosa es tener express-session que siempre necesitamos para generar las sessions 
    y otra cosa es tener la dependencia externa que va a dirigir como guardar las sessions;
    ya sea session-file-store o connect-mongo. 


`