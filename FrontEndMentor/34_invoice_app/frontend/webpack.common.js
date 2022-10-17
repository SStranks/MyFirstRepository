import ESLintPlugin from 'eslint-webpack-plugin';
// import CopyPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/index.tsx',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
