const express    = require("express");
const morgan     = require("morgan");

//Se obtiene el modulo del route: usuario_router
//const routerV1 = require('./routers/v1/usuario_router');  ----->  ya no

//Se obtiene el index de la version 1
const routerV1 = require('./routers/v1/index.js');

const app = express();

//Usamos los middlewares
app.use(express.json());

app.use(morgan('dev'));

//Ejecutamos el router con el middleware "use"
//app.use(routerV1); ----->  ya no

//Ahora seria asi:
routerV1(app);  //Se llama a la version 1

app.listen(8080, () => {
    console.log('Servidor Okis 8080');
});