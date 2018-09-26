const { resolve } = require('path')
const {
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
/* eslint-disable import/no-extraneous-dependencies */
} = require('webpack')
const merge = require('webpack-merge')
const WebpackShellPlugin = require('webpack-shell-plugin')

const { config, DIST } = require('./common')


const PORT = 3001


module.exports = merge(config, {
  profile: true,
  mode: 'development',

  output: {
    filename: '[name].js',
    path: DIST,
    pathinfo: true,
  },

  performance: {
    hints: false,
  },

  plugins: [
    new LoaderOptionsPlugin({
      debug: true,
      minimize: false,
    }),
    new HotModuleReplacementPlugin(),
    new WebpackShellPlugin({ onBuildEnd: [`echo client run: http://localhost:${PORT}`] }),
  ],

  devServer: {
    contentBase: resolve(__dirname, '..', 'public'),
    hot: true,
    noInfo: false,
    inline: false,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
    host: 'localhost',
    historyApiFallback: true,
    port: PORT,
  },
})
