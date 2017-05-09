const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/client/index.js'),
  output: {
    publicPath: 'dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    inline: true,
    port: 8081,
    historyApiFallback: true,
  },
}