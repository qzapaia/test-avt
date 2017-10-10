const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = []

plugins.push(new webpack.DefinePlugin({
  'process.ui':JSON.stringify(process.argv[6])
}))

if(process.env.PROFILE){
  plugins.push(new BundleAnalyzerPlugin())
}

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
  plugins: plugins
}
