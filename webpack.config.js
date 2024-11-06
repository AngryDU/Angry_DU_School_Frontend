
const path = require("path");
const webpack = require("webpack");
// require('dotenv').config({
//   encoding: process.env.DOTENV_CONFIG_ENCODING,
//   path: process.env.DOTENV_CONFIG_PATH,
//   debug: process.env.DOTENV_CONFIG_DEBUG,
//   override: process.env.DOTENV_CONFIG_OVERRIDE
// });


const ENV = process.env.NODE_ENV || "production";

module.exports = {
  entry: ["./examples/index"],
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  presets:[
    ["@babel/preset-env",
      {
        useBuiltIns:"usage",
        corejs:{version:3, proposals:true}
      }
    ],
    '@babel/preset-react'
  ],
  resolve:{
   fallback:{
    "path": require.resolve("path-browserify")
  },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
