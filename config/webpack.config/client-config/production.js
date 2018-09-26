const merge = require('webpack-merge')
const config = require('./common.js');

// config.output.filename = 'bundle.[hash:8].js';

module.exports  = merge(config.client, {
    mode: 'production',
    devtool: 'source-map',
});
