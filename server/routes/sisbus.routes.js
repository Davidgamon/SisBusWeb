const express = require('express');                             //requiero express
const router = express.Router();                                //crear un objeto con las rutas del servidor

const usuario = require('../controllers/sisbus.controller');   //usuario tendra todos los metodos definidos en el archivo sisbus.controller

router.get('/', usuario.getUsuarios);                           //cuando se haga una peticion get se enviara al metodo usuario.getUsuario
router.post('/', usuario.createUsuario);                        //guardar datos del usuario
router.get('/:id', usuario.getUsuario);                         //obtener un solo usuario
router.put('/:id', usuario.editUsuario);                        //para actualizar o editar datos
router.delete('/:id', usuario.deleteUsuario);                   //para eliminar un usuario
router.get('/iot/:uid/:monto/:op', usuario.Usuariot);

module.exports = router;                                            //exporto las rutas que le asigne a este objeto