const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src') + '/server/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'null-loader'
        ]
      }
    ]
  },
  externals: [webpackNodeExternals()],
  resolve: {
    alias: {
      Common: path.resolve(__dirname, '../src/common'),
    }
  }
};
