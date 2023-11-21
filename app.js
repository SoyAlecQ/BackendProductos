// Inicialización de constantes
const express = require('express')
const app = express()
const port = 3000
// Llamada de las rutas a utilizar
const rutaProducto = require('./routes/rutaProducto')

// Ruta URL de las API's
app.use(express.json())
app.use('/Productos', rutaProducto)

// Inicio servidor - conexión en puerto 3000
app.listen(port, function() {
    console.log(`Servidor funcionando por el puerto ${port}`)
})