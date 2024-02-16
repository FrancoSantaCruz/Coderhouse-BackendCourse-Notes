`                               LOGGERS                                 `/*

Un logger nos permitirá mostrar información sobre nuestra aplicación, con
algunas particularidades: 

    - Podemos mostrar las cosas a partir de "niveles" para separarlos por 
    prioridad.

    - Podemos enviar información a otros recursos, no sólo a la consola, a
    partir de algo conocido como transportes.

Además gracias a lo anteriormente mencionado, podemos loggear diferentes
niveles en diferentes transportes según el entorno, de manera que podemos 
qué es lo que llega a productivo y qué se queda en desarrollo. 

*/
    `                               WINSTON                                 `/*

Winston es un logger diseñado para poder trabajar con multitransportes
para nuestra aplicación, utiliza dos conceptos importantes: 

    - Transporte: Sistema de almacenamiento de nuestros logs.

    - Nivel: Sistema de prioridad que tiene cada log, para definir si un 
    log tiene autorización para pasar por un transporte. 

Transportes:
    Los transportes nativos de Winston permiten que nuestros logs puedan
    salir de la consola y enviarse por otros medios: 
        - Escribirse en un archivo
        - Enviarse a algún servidor externo por http
    Con ayuda de su comunidad activa, también pueden enviarse a bases de
    datos e incluso por mail.

Niveles: 
    Establecer un nivel de prioridad para cada mensaje por enviar es
    crucial. 
    Un nivel al final permitirá hacer saber a nuestro logger "qué es 
    importante mostrar" y "qué podría ignorar en algunos casos".
    Así se definen los niveles principales utilizados en Wintson
    (La prioridad máxima comienza en 0). 
        {
            error: 0,
            warn: 1,
            info: 2,
            http: 3,
            verbose: 4,
            debug: 5,
            silly: 6
        },
*/

`                              ARTILLERY                                `/*

Es un toolkit de performance que nos permitirá someter a nuestro servidor
a pruebas para corroborar la fiabilidad de éste en un entorno real.

Puede configurarse de múltiples maneras para poder simular diferentes
entornos, con diferentes peticiones, en diferentes lapsos de tiempo, 
simulando tráficos reales.

Una vez realizado ésto, nos devolverá un reporte que podemos utilizar
para analizar los resultados de dichos escenarios, ayudándonos a corroborar
la estabilidad del servidor, o en caso contrario, a tomar decisiones para 
arreglar los problemas que reporte. 

Ya que artillery es utilizado para hacer pruebas de manera externa a 
nuestro servidor, vamos a instalar la dependencia de manera global
utilizando 

    > npm install -g artillery

Luego corroboramos que tengamos la librería a partir de: 

    > npm artillery -v 

Para poder ver a Artillery en acción, es necesario tener algunos endpoints
que simulen operaciones, para ello, vamos a realizar: 
    - Una operación sencilla, operación que no debería representar 
    complicaciones ni timepos complicados de respuesta.
    - Una operación compleja, la cual debería demorar una mayor cantidad 
    de tiempo en responder.

Comando quick:
    --count : Especifica el número de usuarios virtuales que se crearán
    para hacer las peticiones.
    --num : Especifica el número de peticiones que realizará cada usuario
    -o : Devuelve un formato json con los resultados del test.
    ej: artillery quick --count 40 --num 50 "endpoint" -o simple.json

Interpretando resultados creados por artillery:

    http.codes.200: Especifica el número de
                    códigos 200 que se devolvieron, ya que son
                    40 usuarios, con 50 peticiones cada uno,
                    indica que todas las peticiones se resolvieron
                    sin problema (2000).
    
    http.requests:  Hablamos de la cantidad de requests por usuario.

    vusers.created: Especifica el número de
                    usuarios de prueba que se generaron,
                    indicando que el test está realizado sobre
                    estos 40 usuarios.

    vusers.failed:  Especifica el número de usuarios de prueba que no
                    lograron pasar a través del endpoint. (?)

    errors.ETIMEDOUT:   De los 40 usuarios virtuales, debido a la tardanza 
                        de las operaciones, los 40 fueron rechazados por 
                        tiempo de espera agotado, es por eso que 
                        vusers.failed es igual a 40.

    http.response_time: Indica estándares sobre todas las
                        peticiones realizadas:
                        > min: la petición más rápida finalizó en 3 
                        milisegundos.
                        > max: La petición más lenta se resolvió en 246
                        milisegundos
                        > median: NO CONFUNDIR CON PROMEDIO, indica que
                        la mitad de las peticiones duraron 144 milisegundos
                        o menos.
                        > pX: indica percentiles, medida estadística que 
                        señala que un determinado porcentaje demoró n 
                        tiempo o menos.

    vusers.session_length:  
                        Hace referencia al tiempo que
                        demoró cada usuario virtual a lo largo de toda su
                        trayectoria en el flujo de las peticiones realizadas
                        > min: El usuario que más rápido finalizó con sus
                        peticiones duró 5 segundos activo
                        > max: El usuario con más demora en las respuestas 
                        de sus peticiones duró casi 7 segundos activo.
                        > median: No confundir con promedio. Indica que la
                        mitad de los usuarios duró 6.7 segundos o menos en
                        la sesión.
                        > pX: Percentiles, medida estadística.


Artillery avanzado: 
    Ver clase 18 -> [1:37:19] a [1:54:10]
    ej práctico: https://github.com/CoderContenidos/RecursosBackend-Artillery

*/

`                             Escalabilidad                             `/*

Cuando hablamos de "escalar" un servidor, lo hacemos a partir de dos 
conceptos: 

    > Escalamiento vertical: Mi servidor necesita ser más potente y 
    necesito mejorar el hardware para tener un servidor más potente.

    > Escalamiento horizontal: Dividamos las tareas en multi-instancias
    de servidores que alojen el aplicativo y se aporyen en las tareas 
    complejas. 
    La escalabilidad horizontal significa utilizar múltiples servidores
    conocidos como NODOS, los cuales trabajarán en equipo para resolver
    un problema en particular.
    A esta red de NODOS trabajando juntos, se le conoce como CLUSTER
    haciendo referencia a que estos múltiples servidores se encuentran 
    en un contexto general donde todos conocen cómo ayudarse en las 
    tareas más complejas. 
    Así la diferencia radica en que, cuando necesitamos más recursos,
    no hace falta tirar el servidor que ya tenemos a la basura para
    comprar uno mejor, sino que podemos conectar otra instancia de 
    otro servidor para que se una a la red de nodos y forme parte 
    del cluster. 

*/

`                                Cluster                                `/*

Para poder configurar satisfactoriamente nuestro servidor a partir de un
modelo horizontal, tenemos que recordar cómo funcionaba la gestión de los 
child process.

Child Process: 
    spawn()
    fork()
    execFile()
    exec()

Sobre el process id: 
    Cuando un proceso se ejecuta, este tiene dentro de sus características
    principales una propiedad conocida como pid. 
    Este processId es muy importante para poder trabajar con otros 
    procesos. 
    Cuando un proceso padre instanciaba un proceso hijo, este mantiene una
    referencia a partir del pid, haciéndole saber que ese proceso es 
    parte de él. 

    process.pid

Sobre el forkeo: 
    Ahora, el proceso global podía generar el nuevo proceso a partir de 4
    métodos principales, donde nosotros tuvimos la posibilidad de hablar 
    sobre el forkeo. 
    La palabra fork será clave para hacer referencia a que un proceso nuevo
    surgirá, pero se mantendrá ligado al proceso que lo generó.
    Anteriormente, llamábamos global process al proceso padre que 
    forkeaba al proceso hijo. 
    Sin embargo, esta vez conoceremos al proceso principal como Primary
    process (anteriormente llamado Master), mientras que a las múltiples 
    instancias que se generen se llamarán workers. 

                            ********* PM2 ********
PM2 es una herramienta para la clusterización de una forma mas específica
y completa, que si bien en el curso no lo estamos abordando, lo normal
es que se ocupe esta herramienta para manejar los clusters. 
Hacerlo con la librería nativa de node es muy básica pero nos sirve para
aprender el manejo de los mismos. 
                            **********************

*/

`                                DOCKER                                 `/*

Docker es una plataforma que permitirá crear, probar e implementar 
aplicativos en unidades de software estandarizadas llamadas contenedores.

Con docker, podremos "virtualizar" el sistema operativo de un servidor 
con el fin de realizar ejecuciones de aplicaciones con la máxima 
compatibilidad. 

Gracias a tener nuestro aplicativo en un contenedor que corra un software
con exactamente las especificaciones que necesita esta app, evitamos el
típico problema del desarrollador "en mi computadora sí funcionaba".

El problema de las máquinas virtuales: 
    El cloud computing se basa en máquinas virtuales. Sin embargo, para
    desarrollo de aplicativos, realmente no parece ser la mejor opción 
    contar con todo un sistema operativo, solo para una simple aplicación.

    La idea debe estar entonces en ejecutar entornos que tengan UNICAMENTE
    LAS CONFIGURACIONES necesarias para ejecutar una aplicación, y nada 
    más. Esto es llamado CONTENEDOR.

CONTENEDOR:
    Un contenedor es un entorno de ejecución para un aplicativo en 
    particular, el cual tiene todas las dependencias que necesita dicha
    aplicación para poder correr sin problemas de compatibilidad. 
    La clave de un contenedor es el concepto del aislamiento, esto 
    indicando que podemos tener múltiples contenedores, con diferentes
    entornos, con diferentes dependencias, y nunca habrá conflictos 
    porque la instalación y uso de las dependencias se hace de manera 
    interna. 
    Además, ya que el entorno no ocupa utilizar todo el sistema operativo
    (sólo el kernel), se vuelven realmente livianos en comparación con
    mover todo un sistema operativo en cada aplicativo.

Docker es una plataforma gestora de contenedores. Nos permitirá entonces
empaquetar en un contenedor nuestro aplicativo, y posteriromente 
compartirlo a algún lado, para que al momento en el que tenga que 
ejecutarse, este pueda hacerlo dentro del contenedor aislado y asegurar
que la ejecución será satisfactoria siempre.

La lógica de Docker se basa en tres pasos generales: 

    1) Un dockerfile: Este cuenta con las instrucciones paso a paso para
    que nuestro proyecto genere una imagen.

    2) Una imagen es el equivalente de una clase, pero con un proyecto
    completo. Cunado generamos la imagen de una aplicación, significa
    que podemos generar múltiples contenedores a partir de esa aplicación
    (como instancias).

    3) Contenedor: El punto final en el que ejecutamos el aplicativo, pero
    esta vez desde un entorno cerrado.

--------------
Como utilizar Docker: 
    1) Crear un Dockerfile: 
            a) View > Command Palette
            b) >Docker: Add Docker Files to Workspace
            c) Completar la configuración requerida. 
    2) Ahora debemos crear la imagen, para eso usamos el comando:
            > docker build -t [nombre] . 
            (el . es para decir que el Dockerfile del cual va a crear
            la imagen se encuentra en el directorio raiz)
    3) Ahora ya tenemos en el docker desktop creada la imagen. 
    4) Debemos crear el contenedor de dicha imagen, para ello le damos 
    al triangulo de "run" que trae la imagen y rellenamos la config
    requerida. 
*/