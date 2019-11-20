/* eslint-disable no-undef */
const path = require('path');
module.exports = {
	dev: {
		host: '0.0.0.0',
		port: 8080,
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,

		assetsSubDirectory: 'static',
		assetsPublicPath: '/', //TODO

		useEslint: true,
		showEslintErrorsInOverlay: false,

		devtool: 'eval-source-map'
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
