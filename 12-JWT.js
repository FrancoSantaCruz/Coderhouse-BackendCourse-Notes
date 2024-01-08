`                                 JWT                                   `/*
Es otra alternativa para mantener identificado a un usuario a lo largo de 
la aplicación. Con la diferencia de que no tiene la necesidad de guardar 
información en archivos.  

En síntesis, con otros métodos normalmente manipulas un token que
relaciona al usuario en cuestion con la información personal guardada en 
la base de datos, con JWT la información es guardada en el token mismo
como si fuera una "encriptación" que el mismo JWT resuelve para cifrar
y decifrar la información del usuario y así mantener identificado al 
usuario. 

Pasos generales para su utilización: 
    1) Crear la función en utils.js para la creación de tokens: 
        export const generateToken = ( user ) => {
            const token = jwt.sign(user, JWT_SECRET, {expiresIn: 180 })
            return token;
        }
        El cual requiere un parámetro el cual tendrá la información del 
        usuario que estaremos manipulando.
        Y una constante secret necesaria para la encriptación de la 
        información. 

    2) En el login de la página estaremos utilizando dicha función para
    crear el token al usuario logeado una vez que el login sea satis-
    factorio.

    3) En cuanto a la utilización de JWT nos permite realizar 
    middlewares para validación y autorización de usuarios según roles.
    Por ej permisos según roles en una ruta determinada. 
    Para ello crearemos principalmente el middleware de JWT para validar
    que el usuario tenga un token activo en el momento de entrar en 
    dicha página:
        export const jwtValidation = (req, res, next) => {
            try {
                const authHeader = req.get('Authorization')
                const token = authHeader.split(' ')[1];
                const responseToken = jwt.verify(token, JWT_SECRET);
                req.user = responseToken;
                next();
            } catch (error) {
                res.status(500).json({ error })
            }
        }
    Luego se lo implementamos a la ruta:
        router.get('/:uid', jwtValidation, async (req, res) => {} )

    Pero hasta el momento solo verificamos que exista el token, pero no 
    el rol del usuario, para ello creamos otro middleware que verifique
    el rol del usuario cuyo token ya ha sido corroborado:
        export const authMiddleware = (role) => {
            return (req, res, next) => {
                if(req.user.role !== role){
                    return res.status(403).json({message : 'Not authorized'})
                }
                next();
            }
        }
    
    Y por último lo implementamos nuevamente a la ruta: 
        router.get('/:uid', jwtValidation, authMiddleware("admin"), async (req, res) => {} )

    En este ejemplo, por el orden de los middlewares y por el argumento
    pasado en el middleware primero estaremos validando al usuario que 
    su token sea correcto y una vez autenticado, verificamos si su rol
    tiene los permisos suficientes para acceder a la ruta en cuestion. 
    Si ambos middlewares pasan satisfactoriamente, ejecuta la lógica de
    la ruta en cuestión. 

*/

`                              Passport JWT                             `/*

    > npm install passport-jwt

Con passport lo único que hacemos es abreviar los pasos que anteriorme
logramos hacer manualmente. Si ya estamos usando passport para otras
validaciones, es más fácil ocupar JWT utilizando la librería. 

Lo que nos ahorramos es hacer el middleware de JWT con la estrategia 
que creamos en el passport.js

*Importante: Con passport nos ahorramos la validación del token, pero 
no la generación del token. El tokenGenerator hay que hacerlo igual
manualmente.

Pasos generales: 
        1) Instalamos la librería e importamos la estrategia.
        2) En el archivo passport.js creamos la estrategia: 
            passport.use("jwt",
                new JWTStrategy(
                    {
                        secretOrKey: JWT_SECRET,
                        jwtFromRequest: ExtractJwt.fromExtractors([fromCookies])
                    },
                    async (jwt_payload, done) => {
                        console.log("---jwt_payload---");
                        console.log(jwt_payload);
                        done(null, jwt_payload)
                    }
                )
            )

        3) Aplicamos el middleware en la ruta: 
            router.get('/:uid', passport.authenticate("jwt", { session: false }), async (req, res) => {} ))
        *Como en app.js tenemos seteado que passport trabaje con 
        sessions, en este caso vamos a settearlo en false en sus
        options.
        
*/

`                              CUSTOM ROUTER                            `/*

Cuando hacemos un 'app.use(middleware)' estamos colocando un middleware
para todos nuestros endppoints. Pero cuando necesitamos que un endpoint
tenga un input dinámico para procesar dicho middleware es entonces
cuando tenemos que crear middlewares a nivel router, y llenar nuestros
endpoints con middlewares escritos explícitamente para colocar sus inputs. 
Customizar el router permitirá dinamizar el middleware generalizado como
si fuera un parámetro más del endpoint. 

Ver aplicación en 12-Bcrypt&JWTCompleto

*/