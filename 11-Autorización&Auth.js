`                             AUTENTICACÍON                            `/*>

Para que un cliente pueda autenticarse, debe existir un registro previo
almacenado en algún lado. El cliente envía un identifcador (como un mail)
y el servidor lo buscará en su base de datos para saber si sí existe
previamente. En caso de que sí, podrá responder con sus credenciales
completas (no sensibles).

En caso de que un cliente intente autenticarse antes de haber generado
un registro, el servidor no lo encontrará en la base y no habrá 
credenciales por devolverle.

Métodos de autenticación: 
    - Usuario y contraseña: Es el método tradicional más utilizado, donde
    el usuario ingresa username o email y password para autenticarse.
    - Sin contraseña (passwordless): Consiste en que, cada vez que 
    queramos iniciar sesión a un recurso, se nos enviará el email un enlace
    que nos permitirá acceder sin necesidad de contraseña. 
    - Por redes sociales: Varias aplicaciones nos dan como opción iniciar
    sesión directamente con alguna red social. La ventaja principal es que
    se usan directamente los datos de esa cuenta social para hacer el 
    inicio de sesión.

    Single factor authentication: Un solo método de autenticación (poco seguro)
    Multi factor authentication: +2 métodos de autenticación

    Datos biométricos: Autentica usuarios mediante huellas dactilares.
    JWT (JSON Web Token): Este método open source permite la transmisión
    segura de datos entre las distintas partes. Comúnmente se utiliza
    para la autorización a partir de un par de claves que contiene una
    clave privada y una pública. 
    OAuth 2.0: Permite que mediante una API, el usuario se autentique y
    acceda a los recursos del sistema que necesita. 

*/


`                             AUTORIZACÍON                              `/*

La autorización es el proceso por el cual el servidor decide si, a pesar
de las credenciales que tienes, se te permite acceder a un recurso o no.
Es decir, que autorizar no hace referencia a que el servidor no sepa quién
eres.

Debetmos tener conjuntos de servicios jerarquizados para: 
    - Usuarios comunes.
    - Usuarios premium (si trabajamos con un sistema de jerarquías).
    - Administrador.

O por ejemplo:
    - Un empleado.
    - Un jefe.
    - Un administrador.  
*/

`                             IMPORTANTE

Al ser procesos diferentes, no olvidemos que deben tener un código de status
diferentes también: 

    - Para procesos fallidos de autenticación: 401
    - Para usuarios rechazados por querer acceder a un recurso no 
    autorizado : 403

    Los status no son intercambiables. Nunca los uses a la ligera. 


                              CONCLUSIÓN

Con AUTENTICACIÓN yo verifico al usuario, identifico al usuario, quien es 
el usuario.
Con AUTORIZACIÓN yo verifico si ese usuario que ya está identificado 
tiene privilegios para ejecutar lo que está solicitando. 
`

`                               BCRYPT                                  `/*
Antes de guardar el password, se debe procesar éste con una operación 
conocida como HASH

Pasos para implementar BCRYPT para el hasheo de contraseñas para una 
autenticación simple de email y contraseña: 
    1) Importar BCRYPT en utils.js y crear las funcionalidades de:
        - Hasheo de contraseña: 
            export const hashData = async (data) => {
                return bcrypt.hash(data, bcrypt.genSalt(10));
            };

        - Comparación de contraseña ingresada y contraseña hasheada 
        almacenada:
            export const compareData = async (data, hashedData) => {
                return bcrypt.compare(data, hashedData);
            };

    2) Luego aplicarlas al router de login al momento de que suceda.
       El hasheo de la contraseña se da cuando un usuario se registra y
       el compare se ocupa al momento de login comparando la contraseña
       enviada por body y la contraseña traída por el usuario de la base 
       de datos.

*/


`                               PASSPORT                                `/*

Passport es un generador de estrategias de autenticación y autorización
para mantener un código limpio, estructurado y altamente configurable.
Podemos utilizar y configurar múltiples estrategias de autenticación y
autorización con passport. En esta ocasión crearemos una estrategia local.



*/