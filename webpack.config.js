const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'dist.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader', 'eslint-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devtool: '#eval-source-map',
  devServer: {
    contentBase: __dirname,
    compress: true,
    historyApiFallback: true,
    noInfo: true,
    before: function (app) {
      let allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        next();
      };

      app.use(allowCrossDomain);
    },
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
}