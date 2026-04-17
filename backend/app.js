//Importar express
import express from 'express';
import packagesRoutes from "./routes/packages.js";
import shipmentsRoutes from "./routes/shipments.js";
import vehiclesRoutes from "./routes/vehicles.js";
import registerDriversRoutes from "./routes/registerDrivers.js";
import registerCustomersRoutes from "./routes/registerCustomers.js";
import loginRoutes from "./routes/login.js";
import logoutRoutes from "./routes/logout.js";
import customersRoutes from "./routes/customers.js";
import driversRoutes from "./routes/drivers.js";

//Importante 
import cookieParser from 'cookie-parser';

//Ejecutar express
const app = express();

//Cookie parser sirve para 
app.use(cookieParser());

//Acepta JSON 
app.use(express.json());

//Creamos los endpoints
app.use("/api/packages", packagesRoutes);
app.use("/api/shipments", shipmentsRoutes);
app.use("/api/vehicles", vehiclesRoutes);
app.use("/api/register/drivers", registerDriversRoutes);
app.use("/api/register/customers", registerCustomersRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/drivers", driversRoutes);

export default app;