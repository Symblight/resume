import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'

import theme from '../shared/ui/themes/default'
import configureStore from '../shared/store/configureStore'
import App from '../shared/components/App'
import { register as registerServiceWorker } from '../shared/register-service-worker'
import { global } from '../shared/global'


const browserHistory = window.browserHistory || createHistory()
const store =
    window.store
    || configureStore()

hydrate(
  <Provider store={store}>
    <Router history={browserHistory}>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AppContainer>
    </Router>
  </Provider>,
  document.getElementById('app'),
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }

  if (!window.store || !window.browserHistory) {
    window.browserHistory = browserHistory
    window.store = store
  }
}

global()
registerServiceWorker()
