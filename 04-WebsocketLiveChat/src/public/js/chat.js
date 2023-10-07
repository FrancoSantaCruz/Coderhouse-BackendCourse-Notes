const socketClient = io()

const username = document.getElementById("username");
const chatForm = document.getElementById("chatForm");
const chatMessage = document.getElementById("chatMessage");
const chat = document.getElementById("chat");

Swal.fire({
    title: "Bienvenidx!",
    text: "Ingresa tu nombre de usuario 😊",
    input: "text",
    confirmButtonText: "Enter",
    inputValidator: value => {
        if (!value) {
            return 'El nombre es un campo obligatorio 😢'
        }
    }
}).then(input => {
    user = input.value
    username.innerText = user
    socketClient.emit("newUser", user)
})
socketClient.on('newUserBroadcast', (user) => {
    Toastify({
        text: `${user} se ha conectado`,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
});

chatForm.onsubmit = (e) => {
    e.preventDefault();

    const infoMessage = {
        name: user,
        message: chatMessage.value
    };
    socketClient.emit("message", infoMessage);
}

socketClient.on('chat', (messages) => {
    const chatMessage = messages.map( (message) => `<p>${message.name}: ${message.message}</p>` ).join(" ");
    chat.innerHTML = chatMessage;
})