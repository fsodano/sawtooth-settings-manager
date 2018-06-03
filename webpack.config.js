const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'dist.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader', 'eslint-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new Dotenv(),
    new CopyWebpackPlugin([{
      from: 'src/protos/',
      to: 'protos/',
    }]),
  ],
  devtool: '#eval',
  devServer: {
    contentBase: __dirname,
    compress: true,
    historyApiFallback: true,
    noInfo: true,
    before(app) {
      const allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        next();
      };

      app.use(allowCrossDomain);
    },
  },
  node: {
    fs: 'empty',
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
}
