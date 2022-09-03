//setupProxy.js
const {createProxyMiddleware} = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        '/auth',
        createProxyMiddleware({
            target :"http://ec2-3-34-4-186.ap-northeast-2.compute.amazonaws.com:8080/",
            changeOrigin: true
        })
    );
};