/* eslint-disable no-undef */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	mode: 'production',
	devtool: config.build.useProdSourceMap ? config.build.devtool : false,
	output: {
		path: config.build.assetsRoot,
		filename: 'js/[name].[contenthash].js',
		chunkFilename: 'js/[id].[contenthash].js',
		publicPath: config.build.assetsPublicPath
	},
	plugins: [
		// new webpack.DefinePlugin({
		//   'process.env': env
		// }),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, '../public/index.html'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			}
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			// chunksSortMode: 'dependency'
		})
	]
});
