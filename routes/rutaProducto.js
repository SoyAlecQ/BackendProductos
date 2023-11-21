// Inicialización de constantes
const express = require('express');
const router = express.Router();
// Llamada del controlador para ser utilizado en las rutas
const controladorProducto = require('../controllers/controladorProducto');

// Rutas a utilizar junto a su respectivo controlador para ejecutar
router.post('/Guardar', controladorProducto.guardarProducto);
router.put('/Modificar/:codigo', controladorProducto.modificarProducto);
router.delete('/Eliminar/:codigo', controladorProducto.eliminarProducto);
router.get('/ListarTodos', controladorProducto.listarTodos);
router.get('/ListarporCodigo/:codigo', controladorProducto.listarPorCodigo);

// Exportar rutas
module.exports = router;
