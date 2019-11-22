/* eslint-disable no-undef */
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: config.dev.assetsPublicPath
	},
	devtool: config.dev.devtool,
	devServer: {
		// clientLogLevel: 'warning',
		// historyApiFallback: {
		//   rewrites: [
		//     {
		//       from: /.*/,
		//       to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
		//     }
		//   ]
		// },
		hot: true,
		contentBase: false,
		compress: true,
		host: config.dev.host,
		port: config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable
		// quiet: true, // necessary for FriendlyErrorsPlugin
		// watchOptions: {
		//   poll: config.dev.poll
		// }
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, '../public/index.html'),
			inject: true
		})
	]
});
