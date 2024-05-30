const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mode: "production",
  performance: {
    hints: false
  },
  entry: './src/index',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, //바벨 로더가 실행시키지 못하도록 제외
        loader: 'babel-loader', // 바벨 로더를 추가한다
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'bundle-report.json',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_BASE_URL': JSON.stringify(process.env.REACT_APP_BASE_URL),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3002,
    allowedHosts: "all"
  },
  watchOptions: {
    poll: true,
    ignored: '/node_modules/',
  },
};
