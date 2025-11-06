const registrarProductoUseCase = require('../../application/use_cases/registrarProducto');
const imagenService = require('../services/imagenService');
const productoService = require('../services/productoService');

exports.registrarProducto = async (req, res) => {
  try {
    const data = await registrarProductoUseCase({ imagenService, productoService }, {
      file: req.file,
      body: req.body
    });
    res.json(data);
  } catch (error) {
    // Determinar qué servicio falló basándose en el mensaje de error o stack
    let servicioFallido = 'desconocido';
    if (error.stack) {
      if (error.stack.includes('imagenService')) {
        servicioFallido = 'imagenService';
      } else if (error.stack.includes('productoService')) {
        servicioFallido = 'productoService';
      }
    }
    
    res.status(500).json({ 
      error: 'Error al registrar el producto', 
      servicioFallido: servicioFallido,
      detalle: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};


