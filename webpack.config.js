const path = require('path');
const nodeExternals = require('webpack-node-externals');

const rules = require('./webpack/rules.js');
const plugins = require('./webpack/plugins.js');

const isProduction = process.env.NODE_ENV === 'production';
const srcClient = "client/client.js";
const srcServer = "client/server.js";

const developmentConfig = {
  app: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    path.join(__dirname, srcClient),
  ]
};

const productionConfig = {
  app: [
    path.join(__dirname, srcClient),
  ]
};

module.exports = [{
  name: 'client',
  mode: process.env.NODE_ENV,
  devtool: isProduction ? false : 'source-map',
  entry: isProduction ? productionConfig : developmentConfig,
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: rules.config
  },
  resolve: {
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: plugins.config,
},
{
  name: 'server',
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: [
    path.join(__dirname, srcServer),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'render.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules\/)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-hot-loader/babel']
            }
          },
           {
             loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[hash].[ext]'
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'react-svg-loader',
            options: {
              name: 'assets/images/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name]-[hash].[ext]'
        },
      },
    ],
  }
}
];