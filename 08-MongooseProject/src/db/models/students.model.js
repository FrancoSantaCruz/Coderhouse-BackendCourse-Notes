// import mongoose from "mongoose";
import { Schema, model } from "mongoose"

// Crear el esquema/estructura
const studentsSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: true
    },
    dni:{
        type: String,
        required: true,
        unique: true
    },
    curso:{
        type: String,
        required: true
    },
    nota:{
        type: Number,
        required: true
    }
})

// Crear el modelo/coleccion

export const studentsModel = new model('Students', studentsSchema)