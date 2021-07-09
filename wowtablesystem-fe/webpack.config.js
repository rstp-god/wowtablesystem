'use strict';

let path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  mode: 'development',
  entry: {
    interviewModule : './interviewModule/interviewModule.js',
    createRaidModule : './createRaidModule/createRaidModule.js',
    reviewTableModule : './reviewTableModule/reviewTableModule.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/dist/script'
  },
  devtool: "source-map",
  devServer: {
    contentBase: __dirname + '/dist',
    compress: false,
    port: 5050,
    open: true,
    writeToDisk: true,
    openPage: 'script/createRaidModule.html',
  },
  plugins: [
    new HTMLWebpackPlugin({ 
      template: './interviewModule/interviewModule.html', 
      filename: `interviewModule.html`,
      chunks: ['interviewModule'],
    }), 
    
    new HTMLWebpackPlugin({ 
      template: './createRaidModule/createRaidModule.html', 
      filename: `createRaidModule.html`,
      chunks: ['createRaidModule'],
    }), 
    new HTMLWebpackPlugin({ 
      template: './reviewTableModule/reviewTableModule.html', 
      filename: `reviewTableModule.html`,
      chunks: ['reviewTableModule'],
    }), 
    new CleanWebpackPlugin()
  ]
};