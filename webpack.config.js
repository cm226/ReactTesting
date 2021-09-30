const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    pageOne : './src/ReactWebComponent.ts',
    pageTwo : './src/main/index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader", "postcss-loader"],
      },
      {
      test: /\.js|.tsx|.ts$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
    ]
  },
 plugins: [
    htmlPlugin
  ]
};