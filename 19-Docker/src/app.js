import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
import mongoose from 'mongoose';
import config from './config/config.js';

const app = express();
// const PORT = config.port;
const PORT = 8000;

mongoose.set('strictQuery', false);

mongoose.connect(config.mongo.URL)
    .then(() => console.log("Connected to MongoDB."))
    .catch((error) => console.log(error));



app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', viewsRouter);
app.use('/api/users', usersRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))