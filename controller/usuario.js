const data = [
    {
        id:123,
        nombre: "admin"
    },
    {
        id:124,
        nombre: "tecnico"
    },
]
//====== Creamos las funciones

//1.- Funcion Listar usuarios
function listar(req, res){
    res.json({
        data:data
    });
}

//2.- Funcion Obtener usuario
/*function obtener(req, res){

    let iduser = req.params.idusuario;

    res.json({
        data:data.filter(items => items.id == iduser)
    });
}*/

//Se puede crear tambien asi con la funcion flecha:
let obtener = (req, res) => {

    let iduser = req.params.idusuario;

    res.json({
        data:data.filter(items => items.id == iduser)
    });
}

//3.- Funcion Guardar usuario
function guardar(req, res){
    data.push(req.body);
    res.json({
        data:data
    });
}

//4.- Funcion Borrar usuario
function borrar(req, res){
    let idUsuario = req.params.idusuario;

    res.json({
        data: data.filter(xx => xx.id !=idUsuario )
    });
}

module.exports = {      //Se exporta las funciones
    listar,
    obtener,
    guardar,
    borrar
} 