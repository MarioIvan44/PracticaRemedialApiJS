//Importar express
import express from 'express';

//Importante 
import cookieParser from 'cookie-parser';

//Ejecutar express
const app = express();

//Cookie parser sirve para 
app.use(cookieParser());

//Acepta JSON 
app.use(express.json());

//Creamos los endpoints


export default app;