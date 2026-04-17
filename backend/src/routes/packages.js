import express from "express"
import packagesController from "../controller/packagesController.js";

//Router() nos ayuda a colocar los métodos que tendrá el endpoint
const router = express.Router();

//(api/packages/)
router.route("/")
.get(packagesController.getPackages)
.post(packagesController.createPackage)

//Definimos los method para el endpoint que includes un parámetro dinámico ":id". Este parámetro se utiliza para identificar un recurso específico, como un producto en este caso. Los métodos PUT y DELETE se utilizan para actualizar y eliminar un recurso específico identificado por su ID, respectivamente. 
//(api/packages/:id)
router.route("/:id")
.put(packagesController.updatePackage)
.delete(packagesController.deletePackage)

export default router;