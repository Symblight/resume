const path = require('path');

const { client: clientLoaders } = require('../rules');
const plugins = require('../plugins');
const resolvers = require('../resolves');
const paths = require('../../paths');


const client = {
    name: 'client',
    target: 'web',
    entry: {
        bundle:path.resolve(__dirname, '../../../', 'src/client/')
    },
    output: {
        path: path.join(paths.clientBuild, paths.publicPath),
        filename: 'bundle.js',
        publicPath: paths.publicPath,
        chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    module: {
        rules:  clientLoaders,
    },
    resolve: { ...resolvers },
    plugins: [ ...plugins.client],
    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
        // concatenateModules: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    stats: {
        cached: false,
        cachedAssets: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        hash: false,
        modules: false,
        reasons: false,
        timings: true,
        version: false,
    },
}


module.exports = client
    
