const express = require("express");
const UserModel = require("../models/users.model.jsx");
const router = express.Router();

// Ruta para el registro de usuario
router.post("/register", async (req, res) => {
  try {
    // Crea una instancia del modelo de usuario
    const newUser = new UserModel(req.body.name, req.body.email, req.body.password, req.body.isAdmin);

    // Guarda el usuario en la base de datos
    await newUser.save();
    res.send("Ok");
  } catch (error) {
    console.error("Error en la aplicación:", error);
  }
});

// Ruta para el inicio de sesión de usuario
router.post("/login", async (req, res) => {
  try {
    // Aquí puedes implementar la lógica de inicio de sesión
    // Por ejemplo, verificar si las credenciales son válidas en la base de datos

    // Supongamos que tienes un método en UserModel para verificar las credenciales
    const user = await UserModel.authenticate(req.body.email, req.body.password);

    if (user) {
      res.send("Inicio de sesión exitoso.");
    } else {
      res.status(401).send("Credenciales incorrectas.");
    }
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = router;