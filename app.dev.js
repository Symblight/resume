import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import http from 'http'
import webpack from 'webpack'
import webpackConf from './webpack.config'


const app = express()
const port = process.env.PORT || 8080
const compiler = webpack(webpackConf)

app.disable('x-powered-by')
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



const server = http.createServer(app).listen(port, (err) => {
  if (err) {
    console.error(err)
  }
  console.log(`server runing on port: ${port}`)
})

export { app }
