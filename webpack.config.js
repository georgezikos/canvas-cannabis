const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    global: './src/global.js',
    home: './src/home.js',
    stores: './src/stores.js',
    support: './src/support.js',
    blog: './src/blog.js',
  },
  output: {
    filename: '[name].js',
    // filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties', 'lodash'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // filename: '[name].[contenthash].css',
    }),
    // prettier-ignore
    new LodashModuleReplacementPlugin,
    new CleanWebpackPlugin(),
  ],
  // devtool: 'cheap-module-eval-source-map', development
  // devtool: 'cheap-source-map', production
};
