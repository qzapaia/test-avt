import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          <title>Avantrip.com - Agencia de turismo y viajes líder en Argentina</title>
          <link rel="stylesheet" href="/base.css"/>
          <link rel="stylesheet" href="/fonts.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
          <script src="/onLoadStagSans.js"></script>
          {styleTags}
        </Head>

        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
