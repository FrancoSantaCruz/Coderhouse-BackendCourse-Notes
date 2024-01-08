import express, { urlencoded } from 'express';
import './db/config.js';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import "./passport.js"
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';

import usersRouter from './routes/users.router.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';
import clientsRouter from './routes/clients.router.js';

import {clientsCustomRouter} from './routes/clientsCustom.router.js';

const app = express();

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());

// Handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

// Session
app.use(session({
    store: new MongoStore({
        mongoUrl: 'mongodb+srv://sczfranco:eKJpl0PNLwq3JxVB@codercluster.fapa9ve.mongodb.net/bcryptEx?retryWrites=true&w=majority'
    }),
    secret: 'SESSION_KEY',
    cookie: { maxAge: 60000}
})
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/users", usersRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/clients", clientsRouter);
app.use("/api/customClients", clientsCustomRouter.getRouter());
app.use("/", viewsRouter);

// Server
app.listen(8080, () => {
    console.log("Listening on port 8080.\nhttp://localhost:8080/")
});
