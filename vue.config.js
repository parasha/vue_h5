const path = require('path');
const webpack_base = require('./config/webpack.base');

const resolve = dir => path.resolve(__dirname, '../', dir);

module.exports = {
	publicPath: process.env.NODE_ENV == 'production' ? '/' : '/',
	// publicPath: '/',
	// publicPath: 'https://cdn.example.com/',
	productionSourceMap: true, // 不生成 sourceMap
	configureWebpack: webpack_base,
	chainWebpack(config) {
		config.module
			.rule('vue')
			.use('vue-loader')
			.loader('vue-loader')
			.tap(options => {
				options.compilerOptions.preserveWhitespace = true; // html 标签去空格
				return options
			})
			.end();

		config.optimization.splitChunks({
			chunks: 'all',
			cacheGroups: {
				libs: {
					name: 'node_modules',
					test: /[\\/]node_modules[\\/]/,
					priority: 10,
					chunks: 'initial' // only package third parties that are initially dependent
				},
				vue: {
					name: 'vue', // split elementUI into a single package
					priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
					test: /[\\/]node_modules[\\/]vue(.*)/ // in order to adapt to cnpm
				},
				vant: {
					name: 'vant', // split elementUI into a single package
					priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
					test: /[\\/]node_modules[\\/]vant[\\/]/ // in order to adapt to cnpm
				},
				commons: {
					name: 'commons',
					test: resolve('src'), // can customize your rules
					minChunks: 2, //  minimum common number
					priority: 5,
					reuseExistingChunk: true
				}
			}
		})
		config.optimization.runtimeChunk('single')
	}
}
