/*
**** MIDDLEWARE
Cada vez que utilizamos un app.use estamso utilizando un middleware.
Éstas son operaciones que se ejecutan de manera intermedia
entre la petición del cliente, y el servicio de nuestro servidor. 

Como lo indica el nombre: "middleware" hace referencia a un intermediario,
siempre se ejecuta ante de llegar al endpoint que corresponde.

Podemos utilizar un middleware para:
    - Dar información sobre las consultas que se están haciendo (logs).
    - Autorizar o rechazar usuarios antes de que lleguen al endpoint (seguridad).
    - Agregar o alterar información al método req antes de que llegue al endpoint (formato).
    - Redireccionar según sea necesario (router).
    - En ciertos casos, finalizar la petición sin que llegue al endpoint (seguridad). 

Tipos de middleware: 
Una aplicación Express peude utilizar los siguientes tipos de middleware: 
    - Middleware a nivel de aplicación.
        - Independientemente de la ruta a la que se llame, se ejecutará el middleware.
        - ej .app.use(express.urlencoded({extended: true}));
    - Middleware a nivel endpoint.
        - Se ejecuta el middleware en una ruta en específico. 
    - Middleware a nivel del Router.
        - Se ejecuta para todo el archivo router de un campo específico (Todas las rutas de products por ej.)
    - Middleware de manejo de errores.
        - Es el único tipo de middleware que se ejecuta luego de la petición al servidor.
    - Middleware incorporado.
    - Middleware de terceros.

Estructura: 
    **Middleware a nivel de aplicación:
    Se ocupa siempre con la app del servidor (const app = express();)
    app.use(function (req, res, next) {
        console.log('Time', Date.now());
        next();
    });
    El next() se encarga de terminar la ejecución del middleware y que pase al siguiente middleware o a la petición al servidor. 

    **Middleware a nivel de endpoint: 
    function mid1(req, res next){
        req.dato1 = 'un dato'
        next()
    }
    app.get('/ruta1', mid1, (req,res) => {
        res.json({
            datos:req.dato1
        })
    })

    **Middleware a nivel de Router:
    router.use(function (req, res, next){
        console.log('Time', Date.now());
        next();
    })

    **Middleware de manejo de errores:
    Lleva un argumento más a comparación de los demás middlewares. 
    app.use(function (err, req, res, next){
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

**** MULTER

Multer es un middleware de terceros pensado para poder realizar carga de archivos
al servidor. 

En ocasiones el cliente necesitará subir una imagen, un video o un archivo,
según sea nuestra aplicación, ello nos lleva a configurar nuestro servidor 
para soportar estos archivos y poder alamacenarlos en donde nosotros le indiquemos.

Multer agrega al parámetro request del router una nueva propiedad llamada file
de la cual podremos obtener otras propiedades tales como: 
    - originalname: nombre originial del archivo al ser subido.
    - destination: A donde se guardó. 
    - filename: el nombre que se le fué otorgado.
    - path: lo mismo que destination pero con el filename agregado (destination+filename)
    - size: tamaño o peso del archivo. 
*/