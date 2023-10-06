/*
Websocket

Http es un protocolo cliente servidor.
Websocket es un protocolo con los mismos principios. 
Está basado en TCP para poder establecer esa conexión
entre el cliente y el servidor.

Http es unidireccional
Websocket es bidireccional o de dos vías. 
Su protocolo TCP establece DOS endpoints de comunicación, a cada endpoint se le conoce como socket. 

El contar con estos dos sockets permitirá establecer una comunicación bidireccional entre el cliente y el servidor.
La comunicación bidireccional implica:
    - Que el cliente puede obtener recursos del servidor cuando lo solicite (como en HTTP)
    - Que el servidor pueda entregar información al cliente sin necesidad de que el cliente haga una petición. 

Websockets es un protocolo excelente para esta situación ya que: 
    - El cliente no tendrá que estar actualizando la página constantemente.
    - Permite dar información en tiempo real.
    - Una vez termina su objetivo, el socket se cierra y el servidor deja de notificar innecesariamente al cliente.

Funcionamiento:
    El cliente tiene que enviar una solicitud HTTP llamada "Handshake". Este handshake será un "acuerdo" de confianza
    para que el servidor pueda actualizaral cliente sin que éste se lo pida.
    El servidor recibe la petición de Handshake y procede a "responderle el saludo", a esto se le llama "abrir conexión".
    A partir de este punto, el canal queda abierto de manera bidireccional, por lo que el cliente se puede comunicar 
    con el servidor cuando quiera y viceversa.
    La comunicación es "persistente" hasta que alguno de los dos lados decida cerrar el canal de comunicación.

    El protocolo http funciona como un walkie-talkie, es decir, necesitamos presionar un boton, establecer comunicación
    enviar nuestro mensaje y cortar comunicación, dandole pie al otro lado de tener que presionar el boton y responder.
    El protocolo de Websocket funciona más como un celular donde la conexión se establece y ambos pueden comunicarse
    hasta que uno finalice la comunicación.

Comparación entre ambos:
 ______________________________________________________________________________________________________________
|                                                         |                                                    |
|                          HTTP                           |                     WebSocket                      |
|_________________________________________________________|____________________________________________________|
|  Son peticiones al servidor que esperan una respuesta.  |    Es un canal abierto entre servidor y cliente.   |
|                 Como un walkie talkie.                  |           Como una llamada telefónica.             |
|                                                         |                                                    |
|    Se solicita información y se espera una respuesta.   |      Se usa para comunicación en tiempo real.      |
|               Ej. Un formulario de login.               |                   Ej. un chat.                     |
|                                                         |                                                    |
|        Se usa para consumir APIs y recursos web.        |  Se usa para escuchar información en tiempo real.  |
|                                                         |                                                    |
|                    Protocolo HTTP.                      |          Es un protocolo de comunicación.          |
|                                                         |                                                    |  
|               Conexión de una sola vía.                 |              Consexión de doble vía.               |
|                                                         |                                                    |
|               No sustituye a WebSockets.                |               No sustituye a HTTP.                 |
|_________________________________________________________|____________________________________________________|

app.js pasaría a ser el websocket del lado del servidor. (socketServer)
Para ello debemos: 
    Importar Server de socket.io
    Crear una nueva instancia de Server pasando el app.listen como argumento. const socketServer = new Server(httpServer)

index.js (script) es el socket del lado del cliente.
Para ello debemos: 
    Linkear el script "/socket.io/socket.io.js" a nuestro archivo handlebars
    Linkear un script index.js
    Y en nuestro script index.js ejecutar io() -> const socketClient = io()

Ambos sockets se comunican mediante eventos.
socket.io tiene 2 eventos predefinidos: connection - disconnect 
    - connection: saber cuando un socket del lado del cliente se conecta.
    - disconnect: saber cuando un socket del lado del cliente se desconecta.

Necesito que socket.io esté pendiente (on) a este evento (connection), y cuando pase, que hagas lo siguiente:
socketServer.on("connection", (socket) => {
    console.log("El usuario está conectado")
})
*/