import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: {
        type: [],
        default: []
    }
});

export const businessModel = mongoose.model("Business", businessSchema);