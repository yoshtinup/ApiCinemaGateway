const actualizarProductoUseCase = require('../../application/use_cases/actualizarProducto');
const imagenService = require('../services/imagenService');
const productoService = require('../services/productoService');

exports.actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el id del producto de la URL
    const data = await actualizarProductoUseCase(
      { imagenService, productoService }, // Inyecta los servicios necesarios
      {
        id,              // id del producto
        file: req.file,  // archivo de imagen (si se envía)
        body: req.body   // datos del producto
      }
    );
    res.json(data); // Responde con el resultado de la actualización
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto', detalle: error.message });
  }
};