const express = require('express')
const next = require('next')
const compression = require('compression');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
.then(() => {
  const server = express()

  server.use(express.static('./statics'));

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.use('/storybook',express.static('storybook-static'));

  !dev && server.use(compression());

  // server.use('*', function(req,res){
  //   res.redirect('/storybook');
  // });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
