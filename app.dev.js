import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import http from 'http';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import webpack from 'webpack';
import webpackConf from './webpack.config';

const app = express();
const port = process.env.PORT || 8080;
const compiler = webpack(webpackConf);

app.disable('x-powered-by');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
  }
}));
app.use(webpackHotMiddleware(compiler.compilers.find(comp => comp.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

const server = http.createServer(app).listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`server runing on port: ${port}`);
});

export default app;