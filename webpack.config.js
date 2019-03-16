const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const env = process.env.BUILD_MODE;

console.log("env", env);

const defineEnv = new webpack.DefinePlugin({
  "process.env": {
    REACT_APP_ENV: JSON.stringify(process.env.REACT_APP_ENV)
  }
});

module.exports = {
  mode: env || "development",
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: ["url-loader"]
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "react-svg-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    defineEnv
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true
  }
};
