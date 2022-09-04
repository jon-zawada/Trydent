const path = require('path');

const DIST_DIR = path.join(__dirname, 'client', 'dist');
const SRC_DIR = path.join(__dirname, 'client', 'src', 'index.jsx');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //
  entry: SRC_DIR,
  devtool: 'inline-source-map',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/dist/index.html',
    }),
  ],
};
