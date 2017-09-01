var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        })
    ],
    devtool: '#source-map',
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [

            // {test: /\.css$/, loader: "style-loader!css-loader"}

        ]
    }
};
