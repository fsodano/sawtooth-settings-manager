const express = require('express');
const proxy = require('http-proxy-middleware');
const Dotenv = require('dotenv');

Dotenv.config();
const app = express();

const allowCrossDomain = function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Access-Control-Allow-Origin');
  next();
};

app.use(allowCrossDomain);
app.use('/', proxy(() => true, {
  target: process.env.PROXY_SAWTOOTH_API_URL,
  changeOrigin: false,
  onProxyRes: async (proxyRes, req, res) => {
    res.statusCode = 200;
  },
}));
app.listen(process.env.PROXY_PORT);
