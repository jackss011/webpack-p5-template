var path = require('path');
var webpack = require('webpack');

var prod = false;

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },
    plugins: prod ? [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ] : []
};
