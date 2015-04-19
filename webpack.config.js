module.exports = {
  context: __dirname + '/src',
  entry: {
    'default-bundle': './js/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}],
    preLoaders: [{test: /\.js$/, loaders: ['eslint-loader'], exclude: /node_modules/}]
  }

};