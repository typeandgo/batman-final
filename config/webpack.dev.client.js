const path = require('path');
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src') + '/client/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
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
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
    }),
    new reactLoadablePlugin({
      filename: './dist/react-loadable.json'
    })
  ],
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    alias: {
      Common: path.resolve(__dirname, '../src/common'),
    }
  }
};
