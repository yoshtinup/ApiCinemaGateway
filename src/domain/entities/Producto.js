class Producto {
  constructor({ nombre, descripcion, precio, cantidad, peso, categoria, ingreso, imagen }) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    this.peso = peso;
    this.categoria = categoria;
    this.ingreso = ingreso;
    this.imagen = imagen;
  }
}

module.exports = Producto;
