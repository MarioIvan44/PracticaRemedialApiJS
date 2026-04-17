/*
    Campos:
        packageId:
        routeId:
        driverId:
        vehicleId:
        departureDate:
        deliveryDate:
        status:
*/

import mongoose, { Schema, model } from "mongoose"

const shipmentsSchema = new Schema({
    packageId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Packages"
    },
    routeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Routes"
    },
    driverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drivers"
    },
    vehicleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicles"
    },
    departureDate:{
        type: Date
    },
    deliveryDate:{
        type: Date
    },
    status:{
        type: String,
        enum: ["pending", "in_transit", "delivered"],
        default: "pending"
    }
}, {
    // timestamps: true, agrega automáticamente campos de fecha de creación y actualización a los documentos de la colección, lo que facilita el seguimiento de cuándo se crearon o modificaron los registros.
    timestamps: true,
    // strict: false, permite agregar campos adicionales a los documentos de la colección, lo que facilita la flexibilidad en la estructura de los datos.
    strict: false
})

//"Shipments" es el nombre de la colección que se guarda en la DB
export default model("Shipments", shipmentsSchema)