const path = require('path');
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'hidden-source-map',
  entry: path.resolve(__dirname, '../src') + '/client/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  stats: 'verbose',
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ],
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano')
    }),
    new reactLoadablePlugin({
      filename: './dist/react-loadable.json'
    })
  ],
  resolve: {
    alias: {
      Common: path.resolve(__dirname, '../src/common'),
    }
  }
};
