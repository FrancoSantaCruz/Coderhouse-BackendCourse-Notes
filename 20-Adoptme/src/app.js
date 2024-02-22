import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import swaggerUi from "swagger-ui-express";
import { swaggerSetup } from './utils/swaggerSpecs.js';

const app = express();
const PORT = process.env.PORT||8080;
const MONGO_URI = "mongodb+srv://sczfranco:eKJpl0PNLwq3JxVB@codercluster.fapa9ve.mongodb.net/adoptme?retryWrites=true&w=majority&appName=CoderCluster"

mongoose.set('strictQuery', false);

mongoose.connect(MONGO_URI)
.then( (db) => console.log("Connected to MongoDB"))
.catch( (error) => console.log(error));

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))