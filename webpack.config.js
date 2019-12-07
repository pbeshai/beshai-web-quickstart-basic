const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const paths = {
  build: path.resolve(__dirname, 'build'),
  public: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      src: paths.src,
    },
  },
  output: {
    path: paths.build,
    filename: 'bundle.js',
  },
  devServer: {
    // hot: true // enable hot module reloading (HMR)
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
