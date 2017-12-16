const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './app/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", {
                    loader: "postcss-loader",
                    options: {
                        plugins: [
                            require('autoprefixer')
                        ]
                    }
                }]
            })
        }, {
            test: /\.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({ template: './app/index.html' }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack
        .optimize
        .CommonsChunkPlugin({ name: 'vendor' }),
        new webpack
        .optimize
        .CommonsChunkPlugin({ name: 'runtime' })
    ],
    devtool: 'source-map', //显示源码的提示
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
}