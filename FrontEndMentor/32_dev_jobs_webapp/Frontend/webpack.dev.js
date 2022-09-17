const { merge } = require('webpack-merge');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.[contenthash].js',
    publicPath: '/',
    // assetModuleFilename: 'images/[name][ext]',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    static: ['./public'],
    historyApiFallback: true,
    /** "open"
     * opens the browser after server is successfully started
     */
    // NOTE:  Can't set 'open' to true; like Create-React-App, there is a bug with accessing the browser/ports from WSL2
    open: false,
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    hot: true,
    /** "liveReload"
     * disable live reload on the browser. "hot" must be set to false for this to work
     */
    liveReload: true,
    // historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[local]-[hash:base64:5]' },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      favicon: './src/assets/img/favicon-32x32.png',
    }),
  ],
});
