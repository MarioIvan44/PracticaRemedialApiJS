import express from "express"
import vehiclesController from "../controller/vehiclesController.js";

//Router() nos ayuda a colocar los métodos que tendrá el endpoint
const router = express.Router();

//(api/vehicles/)
router.route("/")
.get(vehiclesController.getVehicles)
.post(vehiclesController.createVehicle)

//Definimos los method para el endpoint que includes un parámetro dinámico ":id". Este parámetro se utiliza para identificar un recurso específico, como un producto en este caso. Los métodos PUT y DELETE se utilizan para actualizar y eliminar un recurso específico identificado por su ID, respectivamente. 
//(api/vehicles/:id)
router.route("/:id")
.put(vehiclesController.updateVehicle)
.delete(vehiclesController.deleteVehicle)

export default router;