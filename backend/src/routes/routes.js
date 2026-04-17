import express from "express"
import routesController from "../controller/routesController.js";

//Router() nos ayuda a colocar los métodos que tendrá el endpoint
const router = express.Router();

//(api/routes/)
router.route("/")
.get(routesController.getRoutes)
.post(routesController.createRoute)

//Definimos los method para el endpoint que includes un parámetro dinámico ":id". Este parámetro se utiliza para identificar un recurso específico, como un producto en este caso. Los métodos PUT y DELETE se utilizan para actualizar y eliminar un recurso específico identificado por su ID, respectivamente. 
//(api/routes/:id)
router.route("/:id")
.put(routesController.updateRoute)
.delete(routesController.deleteRoute)

export default router;