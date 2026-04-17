/*
    Campos:
        name:
        lastName:
        licenseNumber:
        phone:
        email:
        password:
        isActive:
        isVerified:
        loginAttempts: 
        timeOut:
*/

import mongoose, { Schema, model } from "mongoose"

const driversSchema = new Schema({
    name:{
        type: String
    },
    lastName: {
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    address:{
        type: String
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    loginAttempts:{
        type: Number,
        default: 0
    },
    timeOut:{
        type: Date
    }
}, {
    // timestamps: true, agrega automáticamente campos de fecha de creación y actualización a los documentos de la colección, lo que facilita el seguimiento de cuándo se crearon o modificaron los registros.
    timestamps: true,
    // strict: false, permite agregar campos adicionales a los documentos de la colección, lo que facilita la flexibilidad en la estructura de los datos.
    strict: false
})

//"Drivers" es el nombre de la colección que se guarda en la DB
export default model("Drivers", driversSchema)