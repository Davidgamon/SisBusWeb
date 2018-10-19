const mongoose = require('mongoose');               //requiero mongoose y lo guardo en una constante
const URI = 'mongodb://localhost/mean-crud';        //guardo la direccion de la base de datos

mongoose.connect(URI)                               //coneccion a la base de datos
    .then(db => console.log('Base de Datos conectado'))     // muestra un mensaje de conexion a la BD exitosa
    .catch(err => console.error(err));                      //muestra el error por consola

module.exports = mongoose;                                  //exporta