const Producto = require('../../domain/entities/Producto.js');

module.exports = async function registrarProductoUseCase({ imagenService, productoService }, { file, body }) {
  const filename = await imagenService.subirImagen(file);

  const producto = new Producto({
    nombre: body.nombre,
    descripcion: body.descripcion,
    precio: body.precio,
    cantidad: body.cantidad,
    peso: body.peso,
    categoria: body.categoria,
    ingreso: body.ingreso,
    imagen: filename,
    no_apartado: body.no_apartado,
  });

  return await productoService.crearProducto(producto);
};

