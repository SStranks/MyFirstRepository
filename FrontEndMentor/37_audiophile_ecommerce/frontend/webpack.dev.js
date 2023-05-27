import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import path from 'node:path';
import url from 'node:url';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      'build'
    ),
    filename: 'main.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    static: [
      {
        directory: path.resolve(
          path.dirname(url.fileURLToPath(import.meta.url)),
          'public'
        ),
        publicPath: '/',
        staticOptions: {
          extensions: ['jpeg', 'png'],
        },
      },
    ],
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
      template: './src/index-template.html.ejs',
      favicon: './src/favicon-32x32.png',
      templateParameters: {
        PUBLIC_URL: process.env.PUBLIC_URL,
      },
    }),
    new ImageMinimizerPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      exclude: [/favicon/i],
      generator: [
        {
          type: 'asset',
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: ['imagemin-webp'],
          },
        },
      ],
    }),
    new CopyPlugin({ patterns: ['public'] }),
    new Dotenv({ path: './.env.dev' }),
  ],
});
