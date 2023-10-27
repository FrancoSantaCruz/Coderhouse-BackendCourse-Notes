import mongoose from "mongoose";
const URI = 'mongodb+srv://sczfranco:eKJpl0PNLwq3JxVB@codercluster.fapa9ve.mongodb.net/TESTDB?retryWrites=true&w=majority'

mongoose.connect(URI).then( () => {
    console.log("Conectado a la base de datos.")
})
.catch((error) => console.log(error));