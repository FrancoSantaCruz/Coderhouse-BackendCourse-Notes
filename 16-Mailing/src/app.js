import express from "express";
import config from "./config.js";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";

import messagesRouter from "./routes/messages.router.js";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/messages", messagesRouter);
app.use("/", viewsRouter);
app.use("/api/users", usersRouter);

// handlebars
app.engine("handlebars", handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.\nhttp://localhost:8080/`);
});