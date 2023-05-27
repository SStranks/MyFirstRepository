/* eslint-disable unicorn/numeric-separators-style */
import BrotliPlugin from 'brotli-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'node:path';
import url from 'node:url';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      'dist'
    ),
    filename: 'main.[contenthash].js',
    assetModuleFilename: 'assets/[ext]/[name].[hash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: (assetUrl) => {
                  if (assetUrl.startsWith('/public')) return false;
                  return true;
                },
              },
              modules: { localIdentName: '[local]-[hash:base64:5]' },
              importLoaders: 2, // => post-css and sass
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [/favicon/i],
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              'imagemin-gifsicle',
              'imagemin-mozjpeg',
              'imagemin-pngquant',
              'imagemin-svgo',
            ],
          },
        },
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index-template.html',
      favicon: './src/favicon-32x32.png',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7,
    }),
    new CopyPlugin({ patterns: ['public'] }),
    new Dotenv({ path: './.env.prod' }),
  ],
});
