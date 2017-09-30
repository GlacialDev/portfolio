const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    app: "D:/webdev/portfolio/src/scripts/app.js",
    preload: "D:/webdev/portfolio/src/scripts/preload.js"
  },
  output: {
    filename: "[name].js"
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;