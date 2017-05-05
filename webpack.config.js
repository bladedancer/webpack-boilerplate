const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, './dist'),
};

module.exports = {
  target: 'web',
  cache: true,
  entry: './app.js',
  resolve: {
    extensions: ['.js', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets=es2015'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 8080,
  },
};
