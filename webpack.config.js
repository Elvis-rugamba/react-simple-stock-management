const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
   entry: './src/index.jsx',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
    historyApiFallback: true
  },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(scss|sass|css)$/,
          exclude: /node_modules/,
          loaders: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                },
                sourceMap: true,
                importLoaders: 1,
              }
            },
            'sass-loader',
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.DefinePlugin({
          "process.env": dotenv.parsed
      }),
      new Dotenv({
        path: './.env', // load this now instead of the ones in '.env'
        safe: false, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        defaults: false // load '.env.defaults' as the default values if empty.
      })
      ]
  };