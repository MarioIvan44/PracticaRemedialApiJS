import express from "express"
import driversController from "../controller/drivers/driversController.js";

//Router() nos ayuda a colocar los métodos que tendrá el endpoint
const router = express.Router();

//(api/drivers/)
router.route("/")
.get(driversController.getDrivers)

//Definimos los method para el endpoint que includes un parámetro dinámico ":id". Este parámetro se utiliza para identificar un recurso específico, como un producto en este caso. Los métodos PUT y DELETE se utilizan para actualizar y eliminar un recurso específico identificado por su ID, respectivamente. 
//(api/drivers/:id)
router.route("/:id")
.put(driversController.updateDriver)
.delete(driversController.deleteDriver)

export default router;