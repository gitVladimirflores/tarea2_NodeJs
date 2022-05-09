//importamos el router: usuario_router, producto_router
const usuarioRouter = require('./usuario_router.js');
const productoRouter = require('./producto_router.js');

module.exports = (app) => {
    app.use('/api/v1', usuarioRouter);
    app.use('/api/v1', productoRouter);
}