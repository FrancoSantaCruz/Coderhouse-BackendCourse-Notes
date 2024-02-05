import express from "express";
import usersRouter from './routes/users.router.js'
import toysRouter from './routes/toys.router.js'

const app = express();

app.use( express.json() );
app.use( express.urlencoded( {extended: true }))

// Routes
app.use('/api/toys', toysRouter);
app.use('/api/users', usersRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}. \nhttp://localhost:8080/`);
})