const axios = require('axios');
const FormData = require('form-data');

exports.subirImagen = async (file) => {
  const formData = new FormData();
  formData.append('imagen', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype
  });

  const response = await axios.post('http://35.169.179.247:3001/imagen', formData, {
    headers: formData.getHeaders()
  });

  return response.data.filename;
};

exports.actualizarImagen = async (id, file) => {
  const formData = new FormData();
  formData.append('imagen', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype
  });
  console.log('ID recibido:', id);
  console.log('Archivo recibido:', file);
  const response = await axios.put(`http://35.169.179.247:3001/imagen/${id}`, formData, {
    headers: formData.getHeaders()
  });

  return response.data.filename;
};
