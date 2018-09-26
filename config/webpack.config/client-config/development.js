const merge = require('webpack-merge')


const config = require('./common.js');

module.exports = merge(config.client,{
    mode: 'development',
    devtool: 'cheap-module-inline-source-map',
    performance: {
        hints: false,
    },
});