const path = require('path');
const fs = require('fs');
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
    host: 'dlb.qsebao.com',
    port: '443',
    // https: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'ssl/crt.pem'))
    },
    open: true,
    hot: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: 'node_modules',
          minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
          minSize: 0,
          priority: 1,
        },
        common: {
          chunks: "all",
          test: /[\\/]src[\\/]/,
          name: 'common',
          minChunks: 2,
          minSize: 0,
          priority: 1,
        },
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Vue: ['vue/dist/vue.esm.js', 'default'], // 这一条选择性使用，在 element-ui 中会出问题
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
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@common': resolve('src/common'),
      '@pages': resolve('src/pages'),
      '@assets': resolve('src/assets')
    }
  }
};

module.exports = config;
