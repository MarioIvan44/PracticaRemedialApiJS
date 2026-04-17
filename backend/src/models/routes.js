/*
    Campos:
        origin:
        destination:
        distance:
        estimatedTime:
*/

import mongoose, { Schema, model } from "mongoose"

const routesSchema = new Schema({
    origin:{
        type: String
    },
    destination: {
        type: String
    },
    distance:{
        type: String
    },
    estimatedTime:{
        type: String
    }
}, {
    timestamps: true,
    strict: false
})

//"Routes" es el nombre de la colección que se guarda en la DB
export default model("Routes", routesSchema)