import passport from "passport";
import { usersManager } from "./src/managers/usersManager";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GithubStrategy } from 'passport-github2'
import { hashData, compareData } from "./utils";



// LOCAL STRATEGY

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
        if (!user) {
            return done(null, false)
        }

        const isValid = await compareData(password, user.password);
        if (!isValid) {
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


// GITHUB STRATEGY

passport.use('github', new GithubStrategy(
    {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:8080/auth/github/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        
        try {
            const user = usersManager.getByEmail(profile.email);
            // login
            if(user){ //Si se encuentra con un email, es porque está intentando hacer un login
                if(user.from_github){ //si el campo .from_github está en true
                   return done(null, user) //se sigue
                } else {
                    return done(null, false) //si está en false, tenemos un problema.
                }
            }

            // Signup
            const newUser = {
                first_name: 'test',
                last_name: ' tst',
                email: profile.email,
                password: 'asdasd',
                from_github: true
            }
            const createdUser = await usersManager.createOne(newUser)
            done(null, createdUser);
        } catch (error) {
            done(error)
        }
    }
)
);









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