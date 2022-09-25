import ESLintPlugin from 'eslint-webpack-plugin';
// import CopyPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/index.js',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
    new ESLintPlugin(),
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
