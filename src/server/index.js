import express from 'express'
import cors from 'cors'
import path from 'path'
import chalk from 'chalk'
import bodyParser from 'body-parser'
import { configureStore } from '../shared/store'
import paths from '../../config/paths'
import serverRender from './render'


const app = express()

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
if (process.env.NODE_ENV === 'development') {
  app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)))
  app.use('/favicon.ico', (req, res) => {
    res.send('')
  })
}

app.use(cors())

app.use(bodyParser.json())

app.use((req, res, next) => {
  req.store = configureStore()
  return next()
})

app.use(serverRender())

app.listen(process.env.PORT || 8500, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(`App is running: 🌎 http://localhost:${process.env.PORT || 8500}`),
  )
})

export default app

export const test = 'FOO'
