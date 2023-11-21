// Llamada del modelo para utilizar los datos del constructor
const Producto = require('../models/modeloProducto');

// Almacenamiento en memoria para el producto
let productos = [];

// Guardar el producto
const guardarProducto = function (request, response) {
    const {codigo, nombre, descripcion, precio} = request.body;
    const nuevoProducto = new Producto(codigo, nombre, descripcion, precio);
    productos.push(nuevoProducto);
    response.json({mensaje: 'Producto guardado correctamente', producto: nuevoProducto});
    console.log(nuevoProducto);
};

// Modificar el producto
const modificarProducto = function (request, response) {
    const codigoProducto = request.params.codigo;
    const { nombre, descripcion, precio } = request.body;

    const producto = productos.find((p) => p.codigo === codigoProducto);

    if (producto) {
        producto.nombre = nombre || producto.nombre;
        producto.descripcion = descripcion || producto.descripcion;
        producto.precio = precio || producto.precio;
        response.json({mensaje: 'Producto modificado correctamente', producto});
    } else {
        response.status(404).json({mensaje: 'Producto no encontrado'});
    }
};

// Eliminar el producto
const eliminarProducto = function (request, response) {
    const codigoProducto = request.params.codigo;
    const indice = productos.findIndex((producto) => producto.codigo === codigoProducto);

    if (indice !== -1) {
        const productoEliminado = productos.splice(indice, 1)[0];
        response.json({mensaje: 'Producto eliminado correctamente', producto: productoEliminado});
    } else {
        response.status(404).json({mensaje: 'Producto no encontrado'});
    }
};

// Listar todos los productos
const listarTodos = function (request, response) {
    response.json({productos});
};

// Listar por código del producto
const listarPorCodigo = function (request, response) {
    const codigoProducto = request.params.codigo;
    const producto = productos.find((p) => p.codigo === codigoProducto);

    if (producto) {
        response.json({producto});
    } else {
        response.status(404).json({mensaje: 'Producto no encontrado'});
    }
};

// Exportar módulos creados
module.exports = {
    guardarProducto,
    modificarProducto,
    eliminarProducto,
    listarTodos,
    listarPorCodigo,
};
