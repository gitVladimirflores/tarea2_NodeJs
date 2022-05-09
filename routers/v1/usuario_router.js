//Trabajamos con el Router
const router = require('express').Router();

//Se obtiene las funciones del controllador de usuario
const {listar, obtener, guardar, borrar} = require('../../controller/usuario.js');

//Se montan los middlewares: get, post, delete
router.get('/usuario', listar);
router.get('/usuario/:idusuario', obtener);
router.post('/usuario', guardar);
router.delete('/usuario/:idusuario', borrar);

module.exports = router;    //Se exporta el router