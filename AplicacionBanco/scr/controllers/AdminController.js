const userModel = require('./../models/userModel');
const key = process.env.KEY;
const hash = process.env.HASH;
const CryptoJS = require('crypto-js');
//Si es posible, utiliar hash para la contrase;a;
require('mongoose');
class AdminController {
  consultarClientePorId(req, res) {
    const filter = {rfc : CryptoJS.AES.encrypt(req.body.rfc,key)}
    if(!filter){
        res.status(400).send({message: 'No se ingreso ningun dato'});
    }
    userModel.find(filter).then((response)=>{
      if(!response.ok){
        res.status(400).send({message: 'No se pudo encontrar el cliente'});
      }else{
        res.send(response);
      }
    })
  }
  eliminarCliente(req, res) {
    const filter = {rfc : CryptoJS.AES.encrypt(req.body.rfc,key)}
    const update = {status:"Inactivo"};
    userModel.findOneAndUpdate(filter, update,{new:true}).then((updateUser) => {
      res.send(updateUser);
    }).catch((err)=>{
      console.error('Error actualizando el ususario',err);
    })
  }
  agregarCliente(req, res) {
    const name = req.body.name;
    const rfc = CryptoJS.AES.encrypt(req.body.rfc,key);
    const email = req.body.email;
    const password = CryptoJS.AES.encrypt(req.body.password,hash);
    const rol = req.body.rol;
    const status =req.body.status;
    userModel.create({name, rfc,email, password,rol,status}).then((response)=>{
      res.send(response);
    }).catch((err)=>{
      res.send('Error: ',err);
    })
  }

  ///Modificar actualizarCliente y consultar cliente. Ya con eso tenemos el desarrollo del backend completo
  actualizarCliente(req, res) {
    const password = CryptoJS.AES.encrypt(req.body.password,hash);
    const update = {password:password};
    const filter = {rfc : CryptoJS.AES.encrypt(req.body.rfc,key)};
    if (!filter || !update) {
      return res.status(400).send({ message: 'RFC y contraseña son requeridos' });
    }
    userModel.findOneAndUpdate(filter,update,{new:true}).then((updatedUser)=>{
      res.send(updatedUser);
    }).catch((err)=>{
      res.status(500).send({ message: 'Error al actualizar el usuario', error: err.message });
    })

  }


}
module.exports = new AdminController();