const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/trevornote.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*', '.png']
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|jpg|png|svg)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
};
