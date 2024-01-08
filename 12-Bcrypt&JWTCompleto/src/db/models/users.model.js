import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    from_github:{
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['admin', 'premium', 'client'],
        default: 'client',
    }
})

export const usersModel = mongoose.model('Users', usersSchema);
