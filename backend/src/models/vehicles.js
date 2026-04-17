/*
    Campos:
        plate:
        model:
        capacity:
        status:
        driverId:
*/

import mongoose, { Schema, model } from "mongoose"

const vehiclesSchema = new Schema({
    plate:{
        type: String
    },
    model: {
        type: String
    },
    capacity: {
        type: Number
    },
    status: {
        type: String,
        enum: ["available", "in_use", "maintenance"],
        default: "available"
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drivers"
    }
}, {
    timestamps: true,
    strict: false
})

//"Vehicles" es el nombre de la colección que se guarda en la DB
export default model("Vehicles", vehiclesSchema)