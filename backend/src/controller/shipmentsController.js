const shipmentController = {}

import shipmentModel from "../models/shipments.js";

//SELECT de envíos
shipmentController.getShipments = async (req, res) => {
    const shipments = await shipmentModel.find();
    res.json(shipments)
}

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

//Insertar un nuevo envío
shipmentController.createShipment = async (req, res) => {
    //Solicitar los datos
    const {packageId, routeId, driverId, vehicleId, departureDate, deliveryDate, status} = req.body;
    //LLenar mi modelo con estos datos que acabo de pedir
    const newShipment = new shipmentModel({packageId, routeId, driverId, vehicleId, departureDate, deliveryDate, status})
    //Guardo todo en la base de datos
    await newShipment.save();
    res.json({message: "Shipment saved"})
}

//Update de un envío
shipmentController.updateShipment = async (req, res) => {
    const {packageId, routeId, driverId, vehicleId, departureDate, deliveryDate, status} = req.body;
    await shipmentModel.findByIdAndUpdate(req.params.id, {
        packageId, routeId, driverId, vehicleId, departureDate, deliveryDate, status
    }, //new: true, es una opción que se utiliza para indicar qsdue se desea obtener el documento actualizado después de realizar la actualización. Si se establece en true, el método findByIdAndUpdate devolverá el documento actualizado en lugar del documento original antes de la actualización. 
    {new: true})
    res.json({message: "Shipment updated"})
}   

//Delete de un envío
shipmentController.deleteShipment = async (req, res) => {
    await shipmentModel.findByIdAndDelete(req.params.id)
    res.json({message: "Shipment deleted"})
}

export default shipmentController;