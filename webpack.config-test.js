var path = require('path');
var ExtractPlugin = require('extract-text-webpack-plugin')
var nodeExternals = require('webpack-node-externals')

var plugins = [
  new ExtractPlugin('[name].css',{allChunks: true})
]

module.exports = {
  /*output:{
    devtoolModuleFilenameTemplate:'[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate:'[absolute-resource-path]?[hash]'
  },*/
  plugins:plugins,
  target: 'node',
  externals:[nodeExternals()],
  // devtool:'cheap-module-source-map',
  module: {
    preLoaders:[
    {
      test:/\.js/,
      loader:'baggage?[file].html=template&[file].scss'
    },
    {
      test:/\.js/,
      loader:'eslint'
    }
    ],
    loaders: [
      {
        test:/\.js$/,
        loader:'babel',
        include: path.resolve(__dirname, './src')
      },
      {
        test:/\.scss$/,
        loader:ExtractPlugin.extract('style','css!sass')
      },
      {
        test:/\.html/,
        loader:'html'
      },
      {
        test:/\.(png|gif|jpe?g|svg)$/i,
        loader:'url',
        query:{
          limit: 10000
        }
      }
    ]
  }
}