const admin = require("firebase-admin");

// Configura la aplicación de administrador de Firebase con tus credenciales
var serviceAccount = require("../indumentaria-db-firebase-adminsdk-bxgkf-4394d1befd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://indumentaria-db-default-rtdb.firebaseio.com/"
})

//Referencia a la base de datos
const db= admin.database();

// Define el modelo de usuario
/* Firebase Realtime Database es una base de datos NoSQL y, a diferencia de bases de datos SQL, 
no define un esquema fijo con tipos de datos, restricciones de clave única, etc. En Firebase, 
cada nodo puede contener diferentes tipos de datos y no hay una restricción de esquema estricto. */
class UserModel {
  constructor(name, email, password, isAdmin) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  async save() {
    try {
      const newRef = await db.ref("Users").push(this);
      console.log("Usuario creado con ID:", newRef.key);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  }
}

module.exports = UserModel;