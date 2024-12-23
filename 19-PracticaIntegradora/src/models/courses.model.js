import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    teacher: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    },
    students: {
        type: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Users"
            }
        ],
        default: []
    },
});

export const coursesModel = mongoose.model("Courses", coursesSchema);