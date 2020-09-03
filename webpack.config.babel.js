"use strict";

var path = require("path");
var config = require('env-to-config')();
var { URL } = require('url');
var currentURL = new URL(config.APPLICATION_URL);

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webRootPath = path.resolve(__dirname);

module.exports = function (env = {}) {

    var publicPath = path.resolve(__dirname, 'public');
    var jsPath = path.resolve(publicPath, 'js');
    var srcPath = path.resolve(__dirname, 'src');

    var HtmlWebpackPluginOption = {
        template: srcPath + "/index.html"
    };
    if (env.build) {
        HtmlWebpackPluginOption.filename = publicPath + "/index.html";
    }

    console.log(env);

    return {
        mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
        entry: "./src/index.js",
        output: {
            path: jsPath,
            filename: 'bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.pug$/, loader: "pug-loader"
                },
                {
                    test: /\.css$/, loader: "style-loader!css-loader"
                },
                {
                    test: /\.sass$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },
                {
                    test: /\.svelte$/,
                    exclude: /node_modules/,
                    loader: 'svelte-loader'
                }
            ]
        },

        resolve: {
            modules: ['node_modules', webRootPath]
        },

        devServer: {
            host: currentURL.hostname,
            port: currentURL.port,
            contentBase: publicPath,
            publicPath: "/"
        },

        plugins: [
            new HtmlWebpackPlugin(HtmlWebpackPluginOption)
        ]
    };

};