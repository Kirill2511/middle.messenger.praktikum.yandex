const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: [`${paths.src}/index.ts`],
  resolve: {
    modules: [paths.src, 'node_modules'],
    alias: { '@': paths.src },
    extensions: ['.ts', '.js'],
  },
  output: { path: paths.build, filename: '[name].bundle.js', publicPath: '/' },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.hbs$/, loader: 'handlebars-loader', exclude: /(node_modules)/ },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
    }),
  ],
  stats: 'errors-only',
};
