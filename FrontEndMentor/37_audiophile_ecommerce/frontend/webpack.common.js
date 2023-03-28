import ESLintPlugin from 'eslint-webpack-plugin';
import path from 'node:path';
import url from 'node:url';

// import CopyPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/index.tsx',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    // For use in CSS url() imports e.g url(~svg/desktop/a.svg)
    // Prefix with ~ to initiate module resolver
    modules: [
      path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/assets'
      ),
      path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'node_modules'
      ),
    ],
    alias: {
      '#Img': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/assets/img'
      ),
      '#Sass': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/assets/sass'
      ),
      '#Svg': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/assets/svg'
      ),
      '#Components': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/components'
      ),
      '#Context': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/context'
      ),
      '#Data': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/data'
      ),
      '#Features': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/features'
      ),
      '#Hooks': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/hooks'
      ),
      '#Layouts': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/layouts'
      ),
      '#Lib': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/lib'
      ),
      '#Pages': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/pages'
      ),
      '#Services': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/services'
      ),
      '#Types': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/types'
      ),
      '#Utils': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'src/utils'
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'logos/',
    //       to: 'assets/logos/',
    //       context: 'src/assets/svg/',
    //     },
    //   ],
    // }),
  ],
};
