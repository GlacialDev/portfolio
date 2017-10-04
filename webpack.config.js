const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    app: __dirname+"/src/scripts/app.js",
    preload: __dirname+"/src/scripts/preload.js"
  },
  output: {
    filename: "[name].js"
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  module: {
    rules: [{
      test: /\.(frag|vert)$/,
      use: "webpack-glsl-loader"
    }]
  }
};

module.exports = config;