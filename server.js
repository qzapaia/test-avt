const express = require('express');
const app = express();
const PORT = process.env.PORT || 3899;

app.use('/storybook',express.static('storybook-static'));
app.use('/',(req,res)=>res.redirect('/storybook'));

app.listen(PORT,()=>console.log(`running on ${PORT}`))
