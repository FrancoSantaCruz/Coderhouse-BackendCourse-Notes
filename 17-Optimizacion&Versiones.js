`                      Rendimiento en producción                        `/*

¿Cómo optimizar el rendimiento del servidor? 
Para que el cliente pueda contar con una experiencia de usuario satisfacto-
ria al utilizar nuestro sistema, podemos implementar algunas prácticas de
optimización y hacer un flujo sólido y constante. 

1) Utilizar funciones asíncronas. 
2) No implementar console.log() en producción.
3) Usar una variable de entorno NODE_ENV = production
    - Setear NODE_ENV = production hará que Express de manera interna 
    cambie algunas cosas en su configuración, como es: 
        > Guardar en caché templates de vistas.
        > Guardar en caché también archivos de estilos de extensiones CSS.
        > Generar menos mensajes "verbose" de errores. Esto quiere decir
        que no se ejecutarán los stack traces de los errores.
4) Clusterizar nuestra aplicación. 
    Existe una forma de aprovechar los hilos o CPUs de un computador, para
    levantar instancias del servidor y poder atender un mayor número de 
    peticiones concurrentes.
    La clusterización nos ayudará a tener un "equipo de aplicaciones" para
    atender las tarea más complicadas. 

5) Configurar el servidor para que éste se reinicie automáticamente. 
    Si implementamos los clusters, podremos mantener múltiples instancias
    de nuestra aplicación, aunque también podemos utilizar un MANEJADOR
    DE PROCESOS.
    Un manejador de procesos nos permitirá escuchar por estas instancias 
    de aplicación y reiniciar alguna de éstas en caso de que algo malo 
    llegara a suceder con alguna. 
    Ej. PM2 

6) Manejar correctamente errores.
    Si implementamos lo indicado en el número 5, nuestro servidor se 
    reiniciará, pero generará tiempos de reinicio innecesario, idealmente
    esperamos que nunca se caiga el servidor.
    Para ello, podemos utilizar try-catchs, con promesas e implementar 
    algunos error handlers para impedir que lleguen a puntos críticos del 
    servidor. 

7) Realizar balanceos de carga. 

8) Realizar comprensión.
    La compresión permitirá que nuestros archivos puedan viajar a través 
    de la red de manera más rápida, manteniendo la consistencia. 
    Hay que tener en cuenta que realizar una compresión de datos puede 
    resultar en un procesamiento algo complejo dejándose directamente a 
    cargo del servidor (en algún middleware, por ejemplo). 
    Existe una compensación en compresión/procesamiento, sin embargo, 
    debemos tomar en cuenta estas posibles implementaciones para saber 
    dónde colocarlo correctamente.

9) Utilizar un proxy inverso. 
    Utilizar el punto intermedio entre el servidor y el cliente, como un 
    proxy inverso, nos permitirá tener una mejor gestión de los servidores 
    con los cuales estamos trabjaando para el desarrollo de nuestra 
    aplicación. 
    Un proxy inverso nos será útil para muchas cosas.
    Ventajas: 
        > Anonimato de servidores, generando un punto de identificación 
        general y redireccionando a los servidores.
        > Realizar carga de archivos estáticos, para reducir la cargar de 
        trabajo al servidor. 
        > Realizar balances de carga y compresiones.
    Ej. Nginx

*/

`                               COMPRESIÓN                              `/*

Cuando el servidor se está comunicando con el cliente en el navegador,
parte de esta comunicación implica revisar si hay algún archivo comprimido 
que necesite descomprimirse y en caso de que así sea, cual sería el 
algoritmo de descompresión a utilizar para poder obtener la información
correctamente. 
Los navegadores modernos pueden aceptar contenido codificado en tres 
algoritmos principales: 

- Deflate
- Gzip (Deflate + algunas cosas adicionales).
- Brotli

GZIP:
    Gzip es el primer y más ocnocido modelo de compresión.
    La compresión se puede colocar a nivel middleware en nuestro servidor
    para poder corroborar la diferencia de transferencia entre una 
    respuesta con y sin compresión.

    Para utilizarlo debemos instalar el módulo:
    > npm install express-compression

    Agregando como middleware global ya estará enviando las respuestas 
    con la compresión aplicada:

    > import compression from "express-compression";

    > app.use(compression());

    Y para poder analizar la información de si es de utilidad ocupar o no
    compression, debemos deshabilitar el caché, verificar que algoritmos
    de compresión aceptaría (Accept-encoding [request Headers]) y verificar
    cuanto peso es transferido y en cuanto tiempo.

BROTLI: 
    Brotli es conocido como una alternativa moderna de Gzip.
    Éste fue desarrollado por Google y ofrece un algoritmo cuya compresión
    puede resultar hasta 30% más efectiva que la compresión de Gzip.

    Para aplicarlo hacemos uso del mismo módulo express-compression
    y repetimos el mismo procedimiento que con Gzip pero con una configura-
    ción distinta: 

    > app.use( compression( {brotli: {enable: true, zlib: {} }} ));

*/

`                           MANEJO DE ERRORES                           `/*

Flujo de errores: 
    La idea será contar con nuestra porpia gestión interna de errores
    con el fin de mantener un mejor orden en el equipo de desarrollo. 

    Contar con una librería de errores permittirá que todos los 
    desarrolladores puedan tener una referencia de los errores más
    comunes dentro de su aplicativo, apoyando así a su respectiva 
    depuración. 

    Para poder generar este flujo de error, necesitaremos de tres cosas
    primordiales: 
        - Un middleware de recepción de errores. 
        - Un generador personalizado de errores.
        - Un diccionario de errores. 

    Todos los ejemplos se encuentran en el proyecto de prueba: 
        > 17-ControlErrores

*/

`                         VERSIONES Y PAQUETES                          `/*

NVM (Node Version Manager):

    NVM Es un software que nos permitirá descargar, instalar y cambiar de
    versiones de node siempre que lo necesitemos. 
    Así, podemos contar con un conjunto de entornos distintos para poder 
    trabajar con múltiples proyectos que requieran ciertas compatibilidades,
    sin afectar los proyectos con los que previamente trabajamos. 

> nvm -v    -> Version de NVM instalado.
> nvm ls    -> Listado de versiones de Node instalados.
> nvm ls-remote ó nvm ls available    -> Listado de versiones disponibles para instalar.
> nvm install [version]    -> Instalar versión requerida.
> nvm use [version]    -> Cambiar entre versiones.

    Corresponde que creemos un archivo llamado .nvmrc y aclaramos la 
    versión de node.



*/

