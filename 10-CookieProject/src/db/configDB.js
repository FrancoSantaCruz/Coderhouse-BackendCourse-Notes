import mongoose from 'mongoose'

const URI = 'mongodb+srv://sczfranco:eKJpl0PNLwq3JxVB@codercluster.fapa9ve.mongodb.net/sessionTest?retryWrites=true&w=majority'

mongoose.connect(URI)
.then( () => console.log("Conectado a la DB"))
.catch( error => console.log(error))