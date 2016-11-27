var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //define entry point
  entry: './src/app.js',

  //define output point
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.html$/,
      loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({

    })
  ]
};
