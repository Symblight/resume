const webpack = require('webpack');

const client = [
    new webpack.DefinePlugin({
        __SERVER__: 'true',
        __CLIENT__: 'false',
    }),
    new webpack.HotModuleReplacementPlugin(),
];

const server = [
    new webpack.DefinePlugin({
        __SERVER__: 'true',
        __CLIENT__: 'false',
    }),
    new webpack.HotModuleReplacementPlugin(),
];

module.exports = {
    client,
    server,
};