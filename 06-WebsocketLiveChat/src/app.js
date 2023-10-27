import express from "express";
import { engine } from 'express-handlebars'
import { Server } from 'socket.io'

import {__dirname} from "./utils.js"
import viewsRouter from "./routes/views.router.js"

const app = express()
const PORT = 8080

app.use(express.json() )
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname+'/views')

const httpServer = app.listen(PORT, () => {
    console.log(`Listening PORT ${PORT}. \nhttp://localhost:8080/`)
})
const socketServer = new Server(httpServer);

const messages = [];
socketServer.on("connection", (socket) => {
    socket.on("newUser", (user) => {
        socket.broadcast.emit("newUserBroadcast", user)
    })

    socket.on("message", (info) => {
        messages.push(info);
        socketServer.emit("chat", messages);
    })
})


// Routes.
app.use('/', viewsRouter)


