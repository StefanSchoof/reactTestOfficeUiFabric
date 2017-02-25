let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index',
    ],
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
      loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader'],
            include: path.join(__dirname, 'src')
        },
        { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader", ], }
      ]
  },
plugins: [
  new webpack.HotModuleReplacementPlugin()
]
};
