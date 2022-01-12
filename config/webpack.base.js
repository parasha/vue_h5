const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => path.resolve(__dirname, '../', dir);

const config = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:8].js',
  },
  devServer: {
    /**
     * Accepts:
     * sudo vim /etc/hosts
     * 127.0.0.1 test.qshuyu.com
     *
     * To start a server with default port
     * http: 80
     * https: 443
     *
     * If use default port, use 'sudo npm run serve'
     */
    host: 'localhost',
    port: '8005',
    https: true,
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, '../public'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Vue: ['vue/dist/vue.esm.js', 'default'], // 这个尽量别用吧，在 element-ui 中会出问题
    }),
    new htmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, './favicon.ico'),
      title: 'vue demo',
    }),
    new webpack.DefinePlugin({
      ENV: process.env.NODE_ENV == 'production' ? JSON.stringify('production') : JSON.stringify('development'),
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@common': resolve('src/common'),
      '@pages': resolve('src/pages'),
      '@assets': resolve('src/assets')
    }
  }
};

module.exports = config;
