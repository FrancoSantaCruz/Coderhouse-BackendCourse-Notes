`                                 DUDAS                                 `/*

>   Error handler drama: Solución encontrada pero requiero hacer ciertas 
    modificaciones repetidas a TODO el proyecto. 
    Lo hago? Está bien la solución? Porque si lo utilizo como API a los 
    endpoints, está mal hacerle next() para que llegue al middleware que 
    solo busca renderizar. Pero por otro lado es la manera en que 
    encontré manipularlo. 

>   Si hago un middleware que responda con un error, como acaparo ese error 
    en el front para mostrarlo sin que corte el flujo de la página? 
    Yo lo hice con un res.render pero no sé si es lo correcto.

>   ¿Cómo puedo saber que cosas tengo que validar en el front y en el back?
    Por ejemplo formularios. Los errores que me da el back, los muestro?

>   Como manipulo formularios cuando se repiten con el each en handlebars, 
    no puedo quitar productos porque me toma el primer elemento. 

>   Como manipulo endpoints que son .delete o .put 

>   No entiendo cuando debo responder los controladores con res.status(200)
    y cuando retorno información, o cuando hago res.redirect, etc. 

>   Cual es el papel de los services y de los controladores? 
    El de los controllers el de devolver res.status y el de los servicios 
    de devolver información? La lógica debe ir en los servicios simplemente
    y en los controllers acaparar los errores? 
    Está bien ocupar throw new Error siempre que querramos acaparar un 
    error?

>   Cómo envío información desde un middleware al front? Yo lo hice con un
    res.render en el de error pero hay otra manera? 

Optimización: 
>   Lo que correspondería sería desarrollar todo el back y cuando tenga 
    finalizado el desarrollo, ahí empezar a hacer las pruebas con 
    artillery, clusterizar, compression, etc ? 
    O debería ir probando a medida que avanzo con los endpoints de que 
    se esté llevando todo correctamente? 

>   Cual es la estructura de archivos que debo tener con los errores. 
    Puedo aplicar los loggers de winston en un script del front? (wsChat.js) 



    export const __dirname = join(dirname(fileURLToPath(import.meta.url)), "..");


*/