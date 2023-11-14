import express from "express";
import cookieParser from "cookie-parser";
import handlebars from 'express-handlebars'
import { __dirname } from "./utils.js";
import session from "express-session";
import FileStore from "session-file-store";

import './db/configDB.js'

import loginRouter from "./routes/login.routes.js"
import viewsRouter from "./routes/views.routes.js"

const app = express();
const secret = '123456';
app.use(cookieParser(secret));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Session FileStore
const fileStore = FileStore(session)

// Session
app.use(session({
    secret: "SESSIONTESTKEY",
    cookie:{
        maxAge: 60 * 60 * 1000
    },
    store: new fileStore(
        {
            path: __dirname + "/sessions",
            
        }
    )
}))



// Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

/* PRIMER EJEMPLO
app.get('/set-cookie', (req, res) => {
    res.cookie('language', 'EN-US').json({msg:"Success"});
    // Si no tiene un valor language el usuario, se le setea en "EN-US", y si tiene pero con otro valor, se modifica.
});

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    const { language } = req.cookies;
    language == 'EN-US' ? res.send(req.cookies.language) : res.send('ES-AR')
});

app.get('/delete-cookie', (req, res) => {
    // res.clearCookie('language').send('Your currently language is the default one.')
    res.clearCookie('language')
    res.clearCookie('name')
    res.send('Your currently language is the default one.')
})

app.get('/set-signedcookie', (req, res) => {
    res.cookie('name', 'TEST', {signed: true}).json({msg:"name signed"})
})

app.get('/', (req,res) => {
    res.json({
        cookies: req.cookies,
        signedCookies: req.signedCookies
    })
})
*/

// Routes
app.use('/login', loginRouter)
app.use('/', viewsRouter)

// Localhost
app.listen(8080, () => {
    console.log(`Server on http://localhost:8080/`);
});