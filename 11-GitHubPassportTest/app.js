import express from 'express';
import usersRouter from './routes/users.router.js';
import viewsRouter from './routes/views.router.js';

import MongoStore from 'connect-mongo';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import handlerbars from 'express-handlebars'

import './db/config.js';
import './passport.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// handlebars
app.engine('handlebars', handlerbars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Session
app.use(session({
    store: new MongoStore({
        mongoUrl: "URI"
    }),
    secret: 'SESSION_KEY',
    cookie: { maxAge: 60 * 1000},
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', viewsRouter);
app.use('/api/users', usersRouter);

app.listen(8080, () => {
    console.log("Escuchando al puerto 8080");
})
