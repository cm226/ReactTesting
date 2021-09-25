const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
  mode: 'development',
  entry: {
    pageOne : './src/ReactWebComponent.ts',
    pageTwo : './src/main/index.js'
  },
  module: {
    rules: [{
      test: /\.js|.tsx|.ts$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.scss$/,
      use: [
        'raw-loader',
        {
          loader:'sass-loader',
          options: { 
            sassOptions:{
              includePaths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        }
      ]
    }
    ]
  },
 plugins: [htmlPlugin]
};