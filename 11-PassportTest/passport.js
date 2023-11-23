import passport from "passport";
import { usersManager } from "./src/managers/usersManager";
import { Strategy as LocalStrategy } from "passport-local";
import { hashData, compareData } from "./utils";


/* LocalStrategy({}, (username, password, done) => {})
LocalStrategy trabaja con username. En caso de que uno de los parámetros no
coincida con los datos estipulados por el servidor podemos modificar los 
parámetros de LocalStrategy que vienen por defecto dentro de las llaves
del primer parámetro como en el ejemplo en ejecución.
En caso de que requiera la información del objeto request en mi callback
para manipular la información, también se puede agregar la propiedad
"passReqToCallback : true" y agregar ese parámetro para lograrlo.
*/
passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const user = await usersManager.getByEmail(email);
        if (user) {
            return done(null, false);
        }
        const hashedPassword = await hashData(password)
        const userCreated = await usersManager.createOne({
            ...req.body,
            password: hashedPassword
        })
        done(null, userCreated)
    } catch (error) {
        done(error)
    }
}));

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const user = await usersManager.getByEmail(email);
        if(!user){
            return done(null, false)
        }

        const isValid = await compareData(password, user.password);
        if(!isValid){
            return done(null, false)
        }
        // Aca le pasamos la información que deseamos que guarde en el 
        // request y en el session. En este caso todo el user. Pero se puede
        // optar por un nuevo objeto con datos más específicos. 
        return done(null, user)
    } catch (error) {
        done(error)
    }
}));



passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await usersManager.getById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})