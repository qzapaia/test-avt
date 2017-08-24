const path = require('path');
const webpack = require('webpack');
console.log(process.argv[6]);
module.exports = {
  plugins:[
    new webpack.DefinePlugin({
      'process.ui':JSON.stringify(process.argv[6])
    })
  ]
}
