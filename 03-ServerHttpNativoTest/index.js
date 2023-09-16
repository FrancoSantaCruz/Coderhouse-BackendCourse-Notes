const http = require('http')

const server = http.createServer()

//Decimos al servidor a que puerto debe escuchar para recibir las peticiones 
// .listen(port, callback)
server.listen(8080, ()=> {
    console.log('Escuchando al puerto 8080')
}) 