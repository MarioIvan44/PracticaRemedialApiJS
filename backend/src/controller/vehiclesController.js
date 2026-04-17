const vehiclesController = {}

import vehiclesModel from "../models/vehicles.js";

//SELECT de vehículos
vehiclesController.getVehicles = async (req, res) => {
    const vehicles = await vehiclesModel.find();
    res.json(vehicles)
}
/*
    Campos:
        plate:
        model:
        capacity:
        status:
        driverId:
*/
//Insertar un nuevo vehículo
vehiclesController.createVehicle = async (req, res) => {
    //Solicitar los datos
    const {plate, model, capacity, status, driverId} = req.body;
    //LLenar mi modelo con estos datos que acabo de pedir
    const newVehicle = new vehiclesModel({plate, model, capacity, status, driverId})
    //Guardo todo en la base de datos
    await newVehicle.save();
    res.json({message: "Vehicle saved"})
}

//Update de un vehículo
vehiclesController.updateVehicle = async (req, res) => {
    const {plate, model, capacity, status, driverId} = req.body;
    await vehiclesModel.findByIdAndUpdate(req.params.id, {
        plate, model, capacity, status, driverId
    }, //new: true, es una opción que se utiliza para indicar qsdue se desea obtener el documento actualizado después de realizar la actualización. Si se establece en true, el método findByIdAndUpdate devolverá el documento actualizado en lugar del documento original antes de la actualización. 
    {new: true})
    res.json({message: "Vehicle updated"})
}   

//Delete de un vehículo
vehiclesController.deleteVehicle = async (req, res) => {
    await vehiclesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Vehicle deleted"})
}

export default vehiclesController;