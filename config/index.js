const path = require('path');
module.exports = {
	dev: {
		host: '0.0.0.0',
		port: 2333,
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,

		assetsSubDirectory: 'static',
		assetsPublicPath: '/', //TODO

		useEslint: true,
		showEslintErrorsInOverlay: false,

		devtool: 'eval-source-map',

		proxyTable: {
			'/api': {
				target: 'http://140.143.128.100:3000', // 接口的域名
				changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
				pathRewrite: {
					// 如果接口本身没有/api需要通过pathRewrite来重写了地址
					'^/api': ''
				}
			}
		}
	},
	build: {
		// Template for index.html
		// index: path.resolve(__dirname, '../public/index.html'),

		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',

		useProdSourceMap: true,
		devtool: 'source-map'
	}
};
