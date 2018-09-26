const merge = require('webpack-merge')
const config = require('./common.js');

module.exports  = merge(config.server, {
    ...config,
    mode: 'production',
});