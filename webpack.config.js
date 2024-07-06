//TEMPLATE with CopyPlugin
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    contentBase: './dist',
    open: true
  },
  entry: './src/index.js',
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      title: 'TODO Webpage',
      header: 'TODO Webpage',
      metaDesc: 'TODO Webpage',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer'
    }),
    new CopyPlugin({ //plug-in if dependencies are in a folder, downside is not in hash. Takes up space
      patterns: [
        { from: "src/images", to: "images" },
        { from: "src/fonts", to: "fonts" },
        { from: "src/styles", to: "styles" }
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  mode: 'development',
  output: {
    clean: true, //This ensures webpack will clean my dist folder before each build
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'general_assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};