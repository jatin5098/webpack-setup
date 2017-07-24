var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/dist'
  },
  module: {
         loaders: [
             {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
             },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
         ]
     },
    plugins: [
        extractPlugin
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};

module.exports = config;