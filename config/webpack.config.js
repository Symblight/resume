/* eslint-disable import/no-dynamic-require */
const ENV = process.env.NODE_ENV || 'development'

/*module.exports = () => {
  if (ENV === 'development' || ENV === 'dev') {
    return [require('./webpack.config/client-config/development'), require('./webpack.config/server-config/development')]
  }
  return [require('./webpack.config/client-config/production'), require('./webpack.config/server-config/production')]
}*/

module.exports = [
  require('./webpack.config/client-config/development'),
  require('./webpack.config/server-config/development')
]

