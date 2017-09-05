const glob = require('glob');
const path = require('path');

const entries = {};

glob.sync('./src/**/!(stories|*stories).js')
    .forEach(p=>{
      const entryKey = p.split('src/')[1];
      entries[entryKey] = p;
    });

module.exports = {
  entry: entries,
  output: {
    path:path.join(__dirname,'dist'),
    filename: "[name]",
    library: 'ui-components',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals:{
    'react':'react',
    'prop-types':'prop-types',
    'styled-components':'styled-components'
  }
}
