const rules = [
  {
    test: /\.(jpg|png)(\?.*$|$)$/,
    loader: 'file-loader',
    options: {
      name: 'assets/images/[hash].[ext]'
    },
  },
  {
    test: /\.svg$/,
    loader: 'react-svg-loader',
    options: {
      name: 'assets/images/[hash].[ext]'
    }
  },
  {
    test: /\.(woff|woff2|eot|ttf)(\?.*$|$)$/,
    loader: 'file-loader',
    options: {
      name: 'assets/fonts/[name]-[hash].[ext]'
    },
  },
];

module.exports.config = rules;
