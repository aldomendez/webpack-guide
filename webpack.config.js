var path = require('path');
var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
var ExtractPlugin = require('extract-text-webpack-plugin')
var production = process.env.NODE_ENV === 'production'

var plugins = [
  new ExtractPlugin('[name].css',{allChunks: true}),
  new webpack.optimize.CommonsChunkPlugin({
    async:true,
    children:true,
    minChunks:2
  })
]

if (production) {
  plugins = plugins.concat([
    new CleanPlugin('builds'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize:51200}),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress:{
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      __SERVER__: !production,
      __DEVELOPMENT__:!production,
      __DEVTOOLS__:!production,
      'process.env':{
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ])
}

module.exports = {
  debug: !production,
  devtool: production ? false : 'eval',
  entry:{
    page:'./src'
  },
  output:{
    path:'builds',
    filename: production ? '[name].bundle.js' : 'bundle.js',
    chunkFilename: '[name]-[hash].js',
    publicPath:'builds/'
  },
  devserver:{
    hot:true
  },
  plugins:plugins,
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