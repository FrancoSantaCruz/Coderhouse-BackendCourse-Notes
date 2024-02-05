`                               PROCESS                                 `/*

Cada vez que corremos un proceso en nodejs, éste genera un objeto llamado
process, el cual contiene información referente a todo lo implicado con el
proceso, cosas como: 
    - Uso de memoria.
    - Id del proceso en el sistema operativo.
    - En qué sistema operativo o plataforma está corriendo. 
    - En qué entorno está corriendo.
    - Qué argumentos tiene el entorno. 


Argumentos en consola:

    Los argumentos permiten iniciar la ejecución de un programa a partir
    de ciertos elementos iniciales. Con argumentos podemos: 
        - Setear configuraciones de arranque.
        - Agregar valores predeterminados.
        - Resolver outputs específicos. 

    Para poder trabajar con argumentos, podemos hacerlo a partir de 
    process.argv
    Recordemos que, por defecto, process.argv siempre tendrá dos 
    elementos iniciales.


Commander:

    Commander es una de las librerías más utilizadas a la fecha para 
    el manejo de argumentos. Permite realizar funciones como: 
        - Convertir flags directamente en booleanos.
        - Limitar sólo las flags configuradas (cualquier otra impide 
            el procesamiento del programa)
        - Colocar argumentos predeterminados.

    Y muchas herramientas más para trabajar con argumentos. 

    > npm install commander
*/

`                               ENTORNOS                                `/*

Un código no puede simplemente hacerse y llegar al cliente. Para que un
código esté listo para llegar al cliente, es necesario que pase por 
diferentes fases.
Sin embargo para que estas fases se encuentren aisladas de las otras fases
(porque no queremos que la fase de desarrollo tenga datos de producción, o
que haya datos de producción en staging), necesitaremos crear entornos
específicos para estas fases.

Nuestras variables cambiarán según el entorno.

*/

`                        GLOBAL & CHILD PROCESS                         `/*

Listeners: 
    El método "on" permitirá poner a nuestro proceso princiapl a la 
    escucha de algún evento para poder ejecutar alguna acción en caso de 
    que algo ocurra.

    Alguno de los listeners más utilizados son: 
        - on 'exit': Para ejecutar un código justo antes de la finalización
        del proceso.
        - on 'uncaughtException': Para atrapar alguna excepción que no 
        haya sido considerada en algún catch.
        - on 'message': para poder comunicarse con otro proceso.

    
Child Process: 
    Existen diferentes formas para que un proceso de node pueda ejecutar
    otro proceso, hay cuatro operadores que pueden ser utilizados y 
    manipulados de diferentes formas. 
    En este curso se aprende sobre el método fork(). 
    Sim embargo se espera que profundice sobre los diferentes métodos
    e indagar contextos de aplicación: 
        fork()
        spawn()
        execFile()
        exec()
    
Proceso general:
    - El padre realiza un fork al proceso hijo.
    - El padre envía un mensaje al proceso hijo.
    - El proceso hijo tiene su propio listener, al recibir el mensaje del
    padre, entiende que tiene que comenzar con su cálculo.
    - Una vez que el hijo termina de calcular, le reenvía un mensaje al
    padre, donde el contenido del mensaje será el resultado.
    - Ese resultado se envía al cliente.

*/