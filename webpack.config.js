const glob = require('glob');
const path = require('path');

const entries = {};
glob.sync('./src/*.*').forEach(p=>{
  entries[path.basename(p, '.js')] = p;
});

module.exports = {
  entry: entries,
  output: {
    path:path.join(__dirname,'dist'),
    filename: "[name].js"
  }
}
