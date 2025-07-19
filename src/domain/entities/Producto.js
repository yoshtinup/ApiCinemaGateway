class Producto {
  constructor({ nombre, descripcion, precio, cantidad, peso, categoria, ingreso, imagen, no_apartado }) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    this.peso = peso;
    this.categoria = categoria;
    this.ingreso = ingreso;
    this.imagen = imagen;
    this.no_apartado = no_apartado;
  }
}

module.exports = Producto;
