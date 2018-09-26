const webpack = require('webpack');
const merge = require('webpack-merge')

const config = require('./common');


module.exports= merge(config, {
    mode: 'development',
    performance: {
        hints: false,
    },
});