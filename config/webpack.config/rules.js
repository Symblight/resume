

const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
};

const cssLoaderClient = { 
    test: /\.css$/,
    use: [
        'style-loader',
        {
            loader: 'css-loader/locals',
                options: {
                    camelCase: true,
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                },    
        }
    ],
};

const cssLoaderServer = {
    test: /\.scss$/,
    use: [
      {
        loader: 'isomorphic-style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader'
      }
    ]
}


const fontLoader = {
    test: /\.(woff|woff2|eot|ttf)$/,
    loader: 'url-loader?limit=100000',
}

const SVGLoader = {
    test: /\.svg$/,
    use: 'react-svg-loader',
}

const urlLoaderClient = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve('url-loader'),
    options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]',
    },
};

const urlLoaderServer = {
    ...urlLoaderClient,
    options: {
        ...urlLoaderClient.options,
        emitFile: false,
    },
};

const fileLoaderClient = {
    exclude: [/\.(js|css|mjs|html|json|ejs)$/],
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[hash:8].[ext]',
            },
        },
    ],
};

const fileLoaderServer = {
    exclude: [/\.(js|css|mjs|html|json|ejs)$/],
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[hash:8].[ext]',
                emitFile: false,
            },
        },
    ],
};

const client = [
    {
        oneOf: [
            babelLoader,
            cssLoaderClient,
            SVGLoader,
            fontLoader,
            urlLoaderClient,
            fileLoaderClient,
        ],
    },
];
const server = [
    {
        oneOf: [
            babelLoader,
            cssLoaderServer,
            SVGLoader,
            fontLoader,
            urlLoaderServer,
            fileLoaderServer,
        ],
    },
];

module.exports = {
    client,
    server,
};