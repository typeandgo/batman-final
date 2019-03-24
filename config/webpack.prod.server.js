const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  devtool: 'source-map',
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  externals: [webpackNodeExternals()],
  resolve: {
    alias: {
      Common: path.resolve(__dirname, '../src/common'),
    }
  }
};
