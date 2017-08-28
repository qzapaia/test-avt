const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
      test: /\.md$/,
      use: "raw-loader"
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.ui':JSON.stringify(process.argv[6])
    })
  ]
}
