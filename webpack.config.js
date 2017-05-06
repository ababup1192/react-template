var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: "./src/script/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: [{
          loader: "pug-loader",
          options: {
            pretty: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      inject: 'body'
    })
  ]
};

module.exports = config;
