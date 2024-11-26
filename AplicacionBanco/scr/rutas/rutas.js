const router=require('express').Router();
const express=require('express');
const middleware=require('./../Middleware/middleware');

const adminControllers=require('./../controllers/AdminController');

router.use(express.json());
router.use(middleware);

router.put('/actualizar_cliente',adminControllers.actualizarCliente);
router.post('/agregar_cliente',adminControllers.agregarCliente);

router.post('/consultarCliente',adminControllers.consultarClientePorId);
router.put('/eliminarCliente',adminControllers.eliminarCliente);


module.exports=router;