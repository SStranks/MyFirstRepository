const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    // filename: 'bundle.js',
    // path: path.resolve('dist'),
    // publicPath: '/',
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  target: 'web',
  devServer: {
    // host: '0.0.0.0',
    port: 3000,
    // client: {
    //   webSocketURL: {
    //     hostname: 'wsl.internal',
    //   },
    // },
    static: ['./public'],
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
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
          // 'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new ESLintPlugin(),
  ],
};
