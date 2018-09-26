const { resolve } = require('path')
/* eslint-disable import/no-extraneous-dependencies */
const {
  EnvironmentPlugin,
} = require('webpack')

const HtmlWebPackPlugin = require('html-webpack-plugin')


const { NODE_ENV = 'development' } = process.env
const IS_PROD = NODE_ENV === 'production'
const IS_DEV = NODE_ENV === 'development'
const IS_TEST = NODE_ENV === 'test'

const DIST = resolve(__dirname, '..', 'dist')
const SRC = resolve(__dirname, '..', 'client')

const config = {
  context: SRC,
  target: 'web',

  entry: {
    vendor: ['react', 'react-dom', 'redux', 'styled-components'],
    index: ['./index'],
  },

  output: {
    path: DIST,
    publicPath: '/',
    filename: '[name].[hash].js',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },

  resolve: {
    extensions: ['.mjs', '.js'],
    modules: [
      'node_modules',
      SRC,
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.svg$/,
        use: 'react-svg-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      title: 'Colorix',
      template: 'index.tpl.html',
    }),
    new EnvironmentPlugin({
      NODE_ENV,
    }),
  ],

  stats: {
    colors: true,
    children: false,
  },

}

module.exports = {
  config,

  IS_DEV,
  IS_PROD,
  IS_TEST,

  DIST,
  SRC,
}
