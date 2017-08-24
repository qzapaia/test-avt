const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
      test: /\.md$/,
      use: "raw-loader"
    }]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.ui':JSON.stringify(process.argv[6])
    })
  ]
}
