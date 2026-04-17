import express from "express"
import shipmentsControllers from "../controller/shipmentsController.js";

//Router() nos ayuda a colocar los métodos que tendrá el endpoint
const router = express.Router();

//(api/shipments/)
router.route("/")
.get(shipmentsControllers.getShipments)
.post(shipmentsControllers.createShipment)

//Definimos los method para el endpoint que includes un parámetro dinámico ":id". Este parámetro se utiliza para identificar un recurso específico, como un producto en este caso. Los métodos PUT y DELETE se utilizan para actualizar y eliminar un recurso específico identificado por su ID, respectivamente. 
//(api/shipments/:id)
router.route("/:id")
.put(shipmentsControllers.updateShipment)
.delete(shipmentsControllers.deleteShipment)

export default router;