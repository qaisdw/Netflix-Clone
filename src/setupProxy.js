const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://movies-library-d2kq.onrender.com',
      changeOrigin: true,
    })
  );
};