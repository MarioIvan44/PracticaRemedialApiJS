const routesController = {}

import routesModel from "../models/routes.js";

//SELECT de rutas
routesController.getRoutes = async (req, res) => {
    const routes = await routesModel.find();
    res.json(routes)
}

/*
    Campos:
        origin:
        destination:
        distance:
        estimatedTime:
*/
//Insertar un nueva ruta
routesController.createRoute = async (req, res) => {
    //Solicitar los datos
    const {origin, destination, distance, estimatedTime} = req.body;
    //LLenar mi modelo con estos datos que acabo de pedir
    const newRoute = new routesModel({origin, destination, distance, estimatedTime})
    //Guardo todo en la base de datos
    await newRoute.save();
    res.json({message: "Route saved"})
}

//Update de una ruta
routesController.updateRoute = async (req, res) => {
    const {origin, destination, distance, estimatedTime} = req.body;
    await routesModel.findByIdAndUpdate(req.params.id, {
        origin, destination, distance, estimatedTime
    }, //new: true, es una opción que se utiliza para indicar qsdue se desea obtener el documento actualizado después de realizar la actualización. Si se establece en true, el método findByIdAndUpdate devolverá el documento actualizado en lugar del documento original antes de la actualización. 
    {new: true})
    res.json({message: "Package updated"})
}   

//Delete de una ruta
routesController.deleteRoute = async (req, res) => {
    await routesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Route deleted"})
}

export default routesController;