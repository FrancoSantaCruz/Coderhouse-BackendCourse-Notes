const socketClient = io()

const form = document.getElementById("form")
const inputName = document.getElementById("nombre")

form.onsubmit = (e) => {
    e.preventDefault();
    const userName = inputName.value;
    socketClient.emit('firstEvent', userName);
}

socketClient.on("secondEvent", (arrNames) => {
    console.log(`info sent : ${arrNames}`)
})