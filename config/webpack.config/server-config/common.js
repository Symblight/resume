const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { server: serverLoaders } = require('../rules');
const plugins = require('../plugins');
const resolvers = require('../resolves');
const paths = require('../../paths');


const server = {
    name: 'server',
    entry: path.resolve(__dirname, '../../../', 'src/server'),
    externals: [nodeExternals()],
    output: {
        path: paths.serverBuild,
        filename: 'server.js',
        publicPath: paths.publicPath,
        // libraryTarget: 'commonjs2',
    },
    resolve: { ...resolvers },
    module: {
        rules: serverLoaders,
    },
    plugins: [...plugins.server],
    stats: {
        colors: true,
    },
}

module.exports = {
    server
}