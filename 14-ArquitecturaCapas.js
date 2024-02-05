`                         ARQUITECTURA DE CAPAS                         `/*

Es un patrón de diseño donde los módulos contemplados dentro de nuestro
aplicativo son separados por "capas".
El nombre "capa" hace referencia a cada rol que debe cumplirse dentro de 
todo el aplicativo.

Responsabilidades:
    Cuando trabajamos con capas, entedemos que cada archivo debe cumplir
    una función específica, permitiendo así que si llegase a ocurrir 
    algún "error" o si llegase a requerirse modificación en algún punto
    tengamos más claro dónde debemos atacar esos cambios.

     Capa       Capa de presentación (Presentation Layer)
      de        Capa de Dominio/Negocio (Domain Layer)
    soporte     Capa de Acceso a Datos (Data Access Layer)       

Capas base:
    En un sistema que trabaje con este modelo, es necesario contar con
    tres capas base:
        - Capa de modelo o Persistencia.
        - Capa de Controlador o Negocio.
        - Capa de Vista o Renderización.

    Sin estas tres capas, el modelo se volvería inconsistente y la 
    comunicación entre los módilos sería débil y generaría muchos 
    problemas.

    Capa de persistencia: 
        > Esta capa tiene por principal objetivo la conexión directa
        con el modelo de persistencia a trabajar, es decir, debe saber
        conectar con la persistencia en memoria, en archivos o en bases
        de datos. Todo dependiendo de cómo haya sido programada la capa.

        La capa de persistencia no debería realizar validaciones ni 
        operaciones mas allá del CRUD que corresponde a una capa de 
        persistencia.

        Para modelos más complejos como Persistencias en bases de datos
        también es posible configurar operaciones transaccionales y
        agregaciones en este mismo punto. 

    Capa de Negocio:
        > Esta capa tiene como fin el desarrollar la lógica 
        correspondiente a la acción de la función. Es decir, debe 
        realizar todas las operaciones necesarias para que la operación
        esté finalizada.
        
        Negocio usualmente necesita de las otras capas para poder 
        resolver la tarea solicitada.

        Negocio no puede acceder ni modificar directamente a los datos
        sino que tiene que hacerlo a partir dela utilización de 
        Persistencia.

        Por lo tanto, Negocio suele tener una instancia de Persistencia 
        para poder utilizarla.

    Capa de Renderizado:
        > La capa de renderizado o Vista, como indica su nombre, sólo
        tiene la función de tomar datos para poder ser renderizados.
        
        Esta capa es una de las más subjetivas en la arquitectura, 
        pues si bien todos los modelos requieren renderizar contenido
        se hace de maneras muy diferentes.

        Renderizado, según sea el enfoque del equipo, también puede
        acceder a Persistencia sin necesidad de pasar por negocio
        siempre y cuando ésta tenga como fin único el de mostrar
        la información correspondiente.

        En ocasiones, también se suele contemplar la capa de renderizado
        fuera de la arquitectura interna y usar algún aplicativo externo 
        (como enviar la informacion a React para que él la renderice,
        que es lo más habitual).

    Capa de Routing: 
        > La capa de routing contendrá todos los archivos de tipo 
        "router" que, como estamos ya acostumbrados, es una capa basada
        en redireccionamientos hacia puntos específicos de nuestra API.
        
        Actualmente con el uso de motores de plantillas, nuestra capa 
        de routing está estechamente conectada con la capa de 
        renderización (al utilizar un views router).

    Capa de Servicio: 
        > La capa de servicios es una capa intermedia entre el 
        controlador y la persistencia, en esencia, un servicio tiene la 
        capacidad de servir como "tunel" de conexión, para que el 
        controlador pueda acceder de manera más homologada a la 
        persistencia.
    
        Contar con una capa de servicio impide que los accesos a 
        persistencia se hagan descontroladamente, con argumentos 
        erróneos, etc.

        Además, son el punto clave para aplicar un patrón repository.

        No confundir una capa de servicio con la capa de negocio, solo
        es un punto intermedio de conexión.

    En conclusión la arquitectura que estaremos ocupando es la siguiente:
    Capa de rutas -> Capa de controlador -> Capa de Servicio -> Capa de Persistencia
    Y la respuesta va en viceversa hasta el controlador que da una respuesta.

    Capa de rutas ejecuta los middleware necesarios (ej. auth) y 
    redirige la petición del usuario al controlador encargado de esa
    funcionalidad. 
    El controlador es quien tiene los objetos req y res por lo tanto
    es quien va a estar validando las peticiones, como por ejemplo, 
    en el caso de que el objeto req.params no traiga la información
    necesaria para ejecutar la funcionalidad, entonces no es necesario
    enviar la información a la capa de servicio y respondemos de que 
    hay información faltante. En caso de que si tenga la información 
    requerida, entonces si el controlador accede a la capa de servicio.
    La capa de servicio es quien hace de conexión con la capa de 
    persistencia por lo cual la capa de servicio no accede ni manipula
    la base de datos directamente pero si es quien llama y administra
    las funcionalidades de la capa de persistencia que se necesiten
    para esa ruta ó servicio. 

    Al obtener la información de la base de datos, empieza el camino 
    a la inversa pero cuando la persistencia responde con los datos 
    que fueron solicitados, es en la capa de servicio donde 
    configuramos ó manipulamos la información a nuestro gusto para que 
    lo reciba el controlador nuevamente (ej. en lugar de que la DB 
    me pase first_name y last_name, simplemente el controlador reciba
    full_name como un solo valor).

*/