//Trabajamos con el Router
const router = require('express').Router();

//Se obtiene las funciones del controlador de producto
const {listarProducts, getProduct, guardarProduct, deleteProduct} = require('../../controller/producto.js');

//Se montan los middleware: get, post, delete
router.get('/producto', listarProducts);
router.get('/producto/:idprod', getProduct);
router.post('/producto', guardarProduct);
router.delete('/producto/:idprod', deleteProduct);

module.exports = router;