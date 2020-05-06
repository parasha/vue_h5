const webpack_base = require('./config/webpack.base');
module.exports = {
    publicPath: process.env.NODE_ENV == 'production' ? '/' : '/',
    // publicPath: '/',
    // publicPath: 'https://dlb-cdn.qsebao.com/',
    productionSourceMap: false, // 不生成 sourceMap
    configureWebpack: webpack_base
}
