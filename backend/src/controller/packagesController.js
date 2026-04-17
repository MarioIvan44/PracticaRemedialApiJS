const packageController = {}

import packageModel from "../models/packages.js";

//SELECT de paquetes
packageController.getPackages = async (req, res) => {
    const packages = await packageModel.find();
    res.json(packages)
}

/*
    Campos:
        trackingNumber:
        weight:
        dimensions:
        description:
        senderId:
        receiverId:
        status:
*/
//Insertar un nuevo paquete
packageController.createPackage = async (req, res) => {
    //Solicitar los datos
    const {trackingNumber, weight, dimensions, description, senderId, receiverId, status} = req.body;
    //LLenar mi modelo con estos datos que acabo de pedir
    const newPackage = new packageModel({trackingNumber, weight, dimensions, description, senderId, receiverId, status})
    //Guardo todo en la base de datos
    await newPackage.save();
    res.json({message: "Package saved"})
}

//Update de un paquete
packageController.updatePackage = async (req, res) => {
    const {trackingNumber, weight, dimensions, description, senderId, receiverId, status} = req.body;
    await packageModel.findByIdAndUpdate(req.params.id, {
        trackingNumber, weight, dimensions, description, senderId, receiverId, status
    }, //new: true, es una opción que se utiliza para indicar qsdue se desea obtener el documento actualizado después de realizar la actualización. Si se establece en true, el método findByIdAndUpdate devolverá el documento actualizado en lugar del documento original antes de la actualización. 
    {new: true})
    res.json({message: "Package updated"})
}   

//Delete de un paquete
packageController.deletePackage = async (req, res) => {
    await packageModel.findByIdAndDelete(req.params.id)
    res.json({message: "Package deleted"})
}

export default packageController;