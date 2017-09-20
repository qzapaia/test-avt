const express = require('express');
const app = express();
const compression = require('compression')
const PORT = process.env.PORT || 3899;

app.use(compression())

app.use('/storybook',express.static('storybook-static'));

app.use('/', function(req,res){
  res.redirect('/storybook');
});

app.listen(PORT,()=>console.log(`running on ${PORT}`))
