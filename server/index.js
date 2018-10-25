const express = require('express');             //requiero express y guardo en una constante
const cors = require('cors');                   //importamos el modulo cors
const app = express();                          //lo guardo en una variable app para poder utilizarlo
const bodyParser = require('body-parser');

const { mongoose } = require('./database');     //se requiere solo la conexion

// Settings- configuraciones
app.set('port', process.env.PORT || 3000);                      //configuramos la adquisicion del puerto de comunicacion

// Middlewares - Procesamiento de datos
//falta morgan
app.use(cors({origin: 'http://localhost:4200'}));               //direccion de la base de datos
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());                                        //metodo json para que el servidor entienda los datos del frontend

// Routes - Rutas o urls
app.use('/registro', require('./routes/sisbus.routes'));   //la aplicacion usara las rutas definidas en routes con un prefijo api

// starting the server - Iniciacion del servidor
app.listen(app.get('port'), () => {
    console.log(`servidor en el puerto ${app.get('port')}`);
});