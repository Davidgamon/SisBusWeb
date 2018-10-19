//aqui es donde se define las funciones o metodos de cada vista o direccion url
const Usuario = require('../models/modeloUsuario');         //requiere el modelo de datos usuarios para consultar a la base de datos 
var saldo = 150;
const usuario = {};                                          //creo un objeto controlador sisbus

usuario.getUsuarios = async (req, res, next) => {               
    const usuarios = await Usuario.find();                   //async await espera la respuesta de la busqueda que hace usuario.find lo guarda en usuario
    res.json(usuarios);                                      //guarda en un formato json el usuario
};

usuario.createUsuario = async (req, res, next) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        uid: req.body.uid,
        saldo: req.body.saldo
    });
    await usuario.save();                                    //guarda el usuario introducido en el frontend
    res.json({status: 'Usuario creado'});
    console.log(usuario);
};

usuario.getUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);             // busca el id enviado por el get url y lo guarda en la variable usuario
    res.json(usuario);                                      //envia al frontend el usuario que se a obtenido
};

usuario.editUsuario = async (req, res, next) => {           // se crea la funcion flecha con los parametros de requerimiento y respuesta
    const { id } = req.params;                              // de todos los parametros requiero solo el id y guarda en una variable id
    const usuario = {                                       // actualizara con los datos de este ususario
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        uid: req.body.uid,
        saldo: req.body.saldo
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});  //busca por id y actualiza los datos del usuario, new true  si no existe lo crea
    res.json({status: 'Usuario Actualizado'});              //respuesta mostrada
};

usuario.deleteUsuario = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);         //se utiliza el metodo remove segun el id
    res.json({status: 'Usuario Eliminado'});                  // responde con un estado empleado eliminado
};
//funcion Get
usuario.Usuariot = async (req, res, next) => {
    const {uid} = req.params
    const {op} = req.params
    const monto = parseInt(req.params.monto);
    var user =  await Usuario.find({uid});
    console.log(user);
    var id = user[0].id;
    console.log(id);
    var saldo_actual = user[0].saldo;
    var nombre = user[0].nombre;
    var cedula = user[0].cedula;
    switch(op) {
        case "+":
            saldo= saldo_actual + monto;
            //res.json({"saldo": saldo+"  a la cuenta  " +uid});
            break
        case "-":
            saldo= saldo_actual - monto;
            //res.json({"saldo": saldo+"  a la cuenta  " +uid});
            break
        default:
            res.status(404);
        return
    }
    const usuario = {                                       // actualizara con los datos de este ususario
        nombre: nombre,
        cedula: cedula,
        uid: uid,
        saldo: saldo
    };
    console.log(usuario);
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario Actualizado '+saldo});          
};

module.exports = usuario;                            //exporto el objeto 