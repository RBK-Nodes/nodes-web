const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path")
module.exports = {
    entry : path.resolve(__dirname, "client/src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "./client/src/index.html",
        filename: "./index.html"
    })
  ]
};