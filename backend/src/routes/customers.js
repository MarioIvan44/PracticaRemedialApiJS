import express from "express"
import customersController from "../controller/customers/customersController.js";

//Router() nos ayuda a colocar los métodos que tendrá el endpoint
const router = express.Router();

//(api/customers/)
router.route("/")
.get(customersController.getCustomers)

//Definimos los method para el endpoint que includes un parámetro dinámico ":id". Este parámetro se utiliza para identificar un recurso específico, como un producto en este caso. Los métodos PUT y DELETE se utilizan para actualizar y eliminar un recurso específico identificado por su ID, respectivamente. 
//(api/customers/:id)
router.route("/:id")
.put(customersController.updateCustomer)
.delete(customersController.deleteCustomer)

export default router;