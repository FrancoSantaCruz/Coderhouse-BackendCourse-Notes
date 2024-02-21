import express from "express";
import handlebars from "express-handlebars";

import "./config/db.config.js";
import config from "./config/config.js";

import { logger } from "./utils/winston.js";
// import { __dirname } from "./utils/utils.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

import authRouter from "./routes/auth.router.js";
import viewsRouter from "./routes/views.router.js";

import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// routes
app.use('/', viewsRouter);
app.use('/api/auth', authRouter);

// Middlewares
app.use(errorMiddleware);

app.listen(config.port, () => {
    logger.info(`Listening on port ${config.port}.`)
})
