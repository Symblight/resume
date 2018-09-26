import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import theme from '../shared/ui/themes/default'
import App from '../shared/components/App'

import configureStore from '../shared/store/configureStore'
import Template from './HTML'


const store = configureStore()

export default function serverRenderer() {
  return (req, res) => {
    const sheet = new ServerStyleSheet()
    const context = {}
    const markup = ReactDOMServer.renderToString(
      <StaticRouter
        location={req.url}
        context={context}
      >
        <AppContainer>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <App />
            </Provider>
          </ThemeProvider>
        </AppContainer>
      </StaticRouter>,
    )
    const styleTags = sheet.getStyleTags()

    res.status(200).send(Template({
      markup,
      styles: styleTags,
    }))
  }
}
