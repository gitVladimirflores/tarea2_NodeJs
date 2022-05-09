const dataProd = [
    {
        id:11,
        price: 29.9,
        nombre: "Balon de Futbol Classic Weston"
    },
    {
        id:12,
        price: 18.90,
        nombre: "Nueva Consola Nintendo Switch"
    },
    {
        id:13,
        price: 115.90,
        nombre: "Combo Xiaomi Note 9 Pro 128 GB"
    },
]

//Se crean las funciones
//1.- Función Listar productos
function listarProducts(req, res){
    res.json({
        data:dataProd
    });
}

//2.- Función obtener producto
function getProduct(req, res){
    let idprod = req.params.idprod;

    res.json({
        data:dataProd.filter(item => item.id == idprod)
    });
}

//3.- Función Guardar producto
function guardarProduct(req, res){
    dataProd.push(req.body);

    res.json({
        data:dataProd
    });
}

//4.- Función Eliminar producto
function deleteProduct(req, res){
    let codeprod = req.params.idprod;

    res.json({
        data: dataProd.filter(xz => xz.id != codeprod)
    });
}

module.exports = {listarProducts, getProduct, guardarProduct, deleteProduct}    //Se exporta las funciones