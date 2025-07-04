const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const routes = require('../infrastructure/routes');

const app = express();
app.use(cors());
app.use(express.json());
//Servicios Externos

app.use('/imagenes', createProxyMiddleware({
  target: 'http://35.169.179.247:3001/imagen',
  changeOrigin: true,
}));

app.use('/', routes);

module.exports = app;
