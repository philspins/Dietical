var webpack = require('webpack');
var path = require('path');

var definePlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
	__PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	devtool: "#eval",
	entry: {
		main:  './app/main.js'
	},
	output: {
		path: path.join(__dirname, './public/js'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{test: /\.jsx$/, loader: 'babel', exclude: /(node_modules)/, query: { presets: ['react', 'es2015'] }},
			{test: /\.js$/, loader: 'babel', exclude: /(node_modules)/, query: { presets: ['react', 'es2015'] }},
			{test: /\.css$/, loader: "style-loader!css-loader"},
      		{test: /\.png$/, loader: "url-loader?limit=100000"},
      		{test: /\.jpg$/, loader: "file-loader"},
      		{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      		{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      		{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      		{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
		]
	}
};
