const express = require('express')
const next = require('next')
const compression = require('compression');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const ui = process.env.UI || 'avantrip';
const uiBasePath = '/' + ui;
const fs = require('fs');

app.prepare()
.then(() => {
  const server = express()

  !dev && server.use(compression()) && console.log('gzip');

  server.use('/storybook', express.static('storybook-static'));

  server.use(express.static('./statics'));

  server.get('*', (req, res, n) => {
    const pagePath = __dirname + '/pages' + uiBasePath + req.url;
    try{
      require.resolve(pagePath)
      app.render(req, res, uiBasePath + req.url, req.query)
    }catch(e){
      n()
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });


  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
