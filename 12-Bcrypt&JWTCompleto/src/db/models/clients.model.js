import mongoose from "mongoose";

const clientsSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    }
})

export const clientsModel = mongoose.model('Clients', clientsSchema);
