const proxy = require("http-proxy-middleware");

module.exports = app =>
  app.use(proxy("/v1/", { target: "https://pro-api.coinmarketcap.com", changeOrigin: true }));
