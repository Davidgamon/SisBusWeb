//modelo de datos que tendran los usuarios en la aplicacion
const mongoose = require('mongoose');                   //requiero mongoose 
const { Schema } = mongoose;                            //definir los esquemas que aplicare

const usuarioSchema = new Schema({                     //genero el esquema de datos al cual rejirse
    nombre: { type: String, required: true},              //
    cedula: { type: String, required: true },
    uid: { type: String, required: true },
    saldo: { type: Number, required: true}
});

module.exports = mongoose.model('Usuario', usuarioSchema); //exporto el esquema usuario Schema con el nombre Usuario