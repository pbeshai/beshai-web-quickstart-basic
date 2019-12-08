const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const paths = {
  build: path.resolve(__dirname, 'build'),
  public: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, 'src'),
};

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = {
  mode: isProd ? 'production' : isDev && 'development',
  bail: isProd, // Stop compilation early in production
  entry: {
    index: path.resolve(paths.src, 'index.js'),
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : undefined,
  resolve: {
    alias: {
      src: paths.src,
    },
  },
  output: {
    path: paths.build,
    filename: '[name].[hash:8].js',
  },
  devServer: {
    // hot: true // enable hot module reloading (HMR)
    overlay: {
      errors: true,
      warnings: false,
    },
  },

  plugins: [
    // production-only plugins
    ...(process.env.NODE_ENV === 'production'
      ? [new CleanWebpackPlugin()]
      : []),

    new HtmlWebpackPlugin({
      template: path.resolve(paths.public, 'index.html'),
    }),
    new CopyPlugin([
      { from: paths.public, to: paths.build, ignore: ['index.html'] },
    ]),
  ],
};
