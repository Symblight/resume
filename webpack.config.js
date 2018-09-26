const { resolve } = require('path')


const ENV = process.env.NODE_ENV || 'development'

/* eslint-disable import/no-dynamic-require */
module.exports = require(resolve(__dirname, 'webpack', `${ENV}.config`))
