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

    1:58:45

`