const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registrarProducto } = require('../controllers/registrarProductoController');
const { actualizarProducto } = require('../controllers/actualizarProducto');

router.post('/registrar-producto', upload.single('imagen'), registrarProducto);

// Ruta para actualizar producto
router.put('/actualizar-producto/:id', upload.single('imagen'), actualizarProducto);

router.get('/health', (req, res) => res.json({ status: 'OK' }));

module.exports = router;
