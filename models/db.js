const admin = require("firebase-admin");

// Configura la aplicación de administrador de Firebase con tus credenciales
var serviceAccount = require("../indumentaria-db-firebase-adminsdk-bxgkf-4394d1befd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://indumentaria-db-default-rtdb.firebaseio.com/"
})

//Referencia a la base de datos
const db= admin.database();

module.exports =db;