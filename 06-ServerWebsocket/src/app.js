import express from "express";
import {__dirname} from './utils.js'
import {engine} from 'express-handlebars'
import { Server } from 'socket.io'

import viewsRouter from './router/views.router.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname+'/views')

const httpServer = app.listen(PORT, () =>{
    console.log(`Listening PORT ${PORT}. \nhttp://localhost:8080/`)
})

// 
const socketServer = new Server(httpServer)

const names = []
socketServer.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`)
    socket.on("disconnect", () => {
        console.log(`Cliente desconectado: ${socket.id}`)
    })

    socket.on("firstEvent", (info) => {
        names.push(info)
        // console.log(`Array: ${names}`)
        // socket.emit('secondEvent', names)
        socketServer.emit('secondEvent', names)
        // socket.broadcast.emit('secondEvent', names)
    })
})

// routes
app.use('/', viewsRouter)