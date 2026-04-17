/*
    Campos:
        name:
        lastName:
        licenseNumber:
        phone:
        email:
        password:
        isActive:
        isVerified:
        loginAttempts: 
        timeOut:
*/

import driversModel from "../models/drivers.js";

const driversController = {};

//SELECT
driversController.getDrivers = async (req, res) => {
  try {
    const drivers = await driversModel.find();
    return res.status(200).json(drivers);
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//DELETE
driversController.deleteDriver = async (req, res) => {
  try {
    const deleteDriver = await driversModel.findByIdAndDelete(req.params.id);

    if (!deleteDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    return res.status(200).json({ message: "Driver eliminated" });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//UPDATE
driversController.updateDriver = async (req, res) => {
  try {
    //Solicito los nuevos datos a actualizar
    let {
        name,
        lastName,
        licenseNumber,
        phone,
        email,
        password,
        isActive:
        isVerified,
        loginAttempts,
        timeOut,
    } = req.body;

    //Validaciones
    //Sanitizar
    name = name?.trim();
    email = email?.trim();

    //validaciones del tamaño del nombre
    if (name.length < 3 || name.length > 15) {
      return res.status(400).json({ message: "Invalid name" });
    }

    //Actualizaciones
    const updateCustomer = await customerModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        lastName,
        email,
        password,
        phone,
        address,
        isVerified,
        loginAttempts,
        timeOut,
      },
      { new: true },
    );

    if (!updateCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    return res.status(200).json({ message: "Customer updated" });
  } catch (error) {}
};

export default driversController;
