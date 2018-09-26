import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import webpack from 'webpack'
import webpackConf from './config/webpack.config'
import chalk from 'chalk'


const app = express()
const port = process.env.PORT || 3000
const compiler = webpack(webpackConf)

app.disable('x-powered-by')
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: '/',
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
}))
app.use(webpackHotMiddleware(compiler.compilers.find((comp) => comp.name === 'client')))
app.use(webpackHotServerMiddleware(compiler))

app.listen(process.env.PORT || 8030, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(`App is running: 🌎 http://localhost:${process.env.PORT || 8500}`),
  )
})

export default app
