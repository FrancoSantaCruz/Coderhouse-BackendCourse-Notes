`                                TESTING                                `/*

Realizar testing puede llevarnos a múltiples beneficios, tales como:

    Reducción de posibilidad de error: Es el objetivo principal del testing, 
    el considerar posibilidades para poder subsanarlas antes de que 
    lleguen al cliente.

    Incremento en el conocimiento del código desarrollado: Pensar con 
    detenimiento y hacer con detalle un flujo de pruebas nos puede llevar 
    a comprender mejor el contexto aplicado del módulo y no sólo su 
    funcionalidad, permitiendo mejoras a futuro.

    Descubrimiento de puntos ciegos del código: ¿Alguna vez te has 
    enfrentado a un "Lo hubiera sabido antes"?. Repasar el flujo testeado 
    permitirá llegar a estos casos lo antes posible, permitiendo que 
    podamos atenderlo con antelación.

    Posibilidad de refactoring: Cuando hacemos pruebas, repasamos 
    constantemente un flujo, lo cual también nos permite notar aspectos 
    que podríamos mejorar el flujo.

Dos formas de pensar en test: 

El testing es un tema de cuidado, y por lo tanto hay que tomarlo en
consideración a partir de dos criterios. 

    - Testing unitario

    - Testing de integración.

*/

`                              TEST UNITARIO                            `/*

Un test unitario está pensado para funcionalidades aisladas, es decir
aquellas funcionalidades en las que no se consideran el contexto u otros
componentes. 

La unidad es el elemento más pequeño que hay, de manera que construir 
unidades y testearlas será bastante sencillo. 

*/

`                                  MOCHA                                `/*

Es un framework de testing originalmente diseñado para nodejs, el cual 
nos permitirá ejecutar entornos completos para poder hacer cualquier 
tipo de pruebas que necesitemos.

Para poder comenzar a utilizarlo, primero hay que tenerlo instalado en 
nuestro entorno.
(https://www.npmjs.com/package/mocha)

Terminología elemental de testing:

Assert: módulo nativo de nodejs que nos permitirá hacer validaciones de 
manera estricta.

archivo.test.js:    la subextensión .test.js indica que el archivo será 
                    utilizado dentro de un contexto de testing

describe:   función utilizada para definir diferentes contextos de testeo, 
            podemos tener la cantidad de contextos que deseemos en un flujo de testing, siempre y cuando reflejen intenciones diferentes.

it: unidad mínima de nuestro testing, en ella, definimos qué acción se 
    está realizando y cuál será el resultado esperado.

before: Función que nos permite inicializar elementos antes de comenzar 
        con todo el contexto de testeo.

after:  Función que nos permite realizar alguna acción una vez finalizado 
        el contexto de testeo

beforeEach: Función que nos permite inicializar elementos antes de 
            comenzar cada test dentro de un contexto particular.

afterEach:  Función que nos permite realizar alguna acción una vez
            finalizado cada test dentro del contexto particular.


*/

`                                  CHAI                                 `/*

Chai es una librería de assertions, la cual nos permitirá realizar 
comparaciones de test más claras.

Está pensado para que, las evaluaciones de test que se hagan en cada 
módulo, sean lo más legibles posibles, haciendo que sean lo más apegadas 
al inglés, reduciendo el nivel de abstracción.

Chai trabaja en un modelo de assertion extendido también, sin embargo, 
en esta clase nos centraremos en aplicar el enfoque de comportamiento 
(BDD) a partir de su módulo de cadena de lenguaje.

Chai permitirá conectar palabras del inglés, con el fin de poder 
realizar una prueba más entendible, algunos de estos conectores son:

    >to: conector inicial para armar la frase.
    >be: para identificar que el elemento sea algo en particular.
    >have: para corroborar que el valor a evaluar tenga algo.
    >and: para encadenar validaciones.
    >not: para realizar una negación.
    >deep: para evaluaciones profundas.
    >equal: para hacer una comparación de igualdad.
    >property: para apuntar a alguna propiedad de un objeto. 

Chai nos ofrece 3 tipos de validaciones distintas: 

    >chai.should()
    >var expect = chai.expect; (Es el que más se usa normalmente)
    >var assert = chai.assert (similar al assert nativo de nodejs)
Más información de su uso: https://www.chaijs.com/

*/

`                           TEST DE INTEGRACIÓN                         `/*

Como ya imaginarás, un test de integración tiene el objetivo de ver que 
los módulos funcionen en conjunto. Así, las funcionalidades conjuntas 
llevan a un resultado más complejo, en menor o mayor medida.

Se traduce a cualquier tarea que podamos probar, donde los módulos puedan 
mezclar sus tareas individuales, para generar un trabajo en conjunto.

Por ejemplo:

   > Módulo de Dao: Permite guardar correctamente un usuario en la base de 
                    datos

   > Bcrypt:    permite hashear correctamente una string.

   > Test de integración:   El conjunto de los módulos permite que se 
                            guarde un usuario en la base de datos, con 
                            su contraseña hasheada.


Existe un punto más allá del test de integración (considerado por algunos
desarrolladores como algo externo, aunque algunos otros desarrolladores lo 
consideran dentro del mismo proceso de integración).

El tipo de test conocido como test funcional, hace referencia a aplicar 
las integraciones de la misma manera que se realizaría un test de 
integración, sin embargo, éstas enfocadas a cumplir una funcionalidad real.

Por ejemplo, si integramos el Dao de usuarios, con bcrypt, además de 
testear el módulo de routing, controlador de express y un middleware de 
passport,, podríamos llegar a generar una integración lo suficientemente 
sólida para concretar una funcionalidad: el registro de un usuario o el 
login del mismo.

Nota como en el ejemplo enunciado hablamos de hacer una integración, sí, 
pero esta vez enfocada a un resultado más complejo en un proceso más 
robusto.

Algunos lo entienden como un súper test de integración.


*/

`                                SUPERTEST                              `/*



Supertest es una librería que nos permitirá ejecutar peticiones HTTP a 
nuestro servidor, para poder probar funcionalidades como estatus de 
peticiones, envío de bodies en petición o revirión de respuestas recibidas
por el servidor.

Al probar un endpoint, estaremos probando múltiples módulos en conjunto, 
utilizados para resolver la funcionalidad que refleja el endpoint.

    > npm i supertest
*/