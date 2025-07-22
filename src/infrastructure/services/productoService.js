const axios = require('axios');

exports.crearProducto = async (producto) => {
  const response = await axios.post('https://apiempresacinesnack.acstree.xyz/api/v1/producto', producto);
  return response.data;
};

exports.actualizarProducto = async (id, producto) => {
  const response = await axios.put(`https://apiempresacinesnack.acstree.xyz/api/v1/producto/${id}`, producto);
  return response.data;
}
exports.obtenerProductoPorId = async (id) => {
  const response = await axios.get(`https://apiempresacinesnack.acstree.xyz/api/v1/producto/${id}`);
  return response.data;
};

exports.eliminarProducto = async (id) => {
  const response = await axios.delete(`https://apiempresacinesnack.acstree.xyz/api/v1/producto/${id}`);
  return response.data;
};
