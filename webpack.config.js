var path = require("path")

module.exports = {
    entry: path.resolve(__dirname, 'client/src/app.jsx'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    output: {
        path: path.resolve(__dirname, 'client/build/'),
        filename: "page.js"
    }
  };