const cleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: ['./src/main.ts'],
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  devServer: {
  port: 9000
},
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json','.scss','.png','.jpg'],
    alias: require('./webpack.aliases'),
    fallback: {
      "fs": false
  },
  },
  stats: 'minimal',


  
};
