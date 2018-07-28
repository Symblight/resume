import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import theme from './ui/themes/default';
import configureStore from './store/configureStore';
import { register as registerServiceWorker } from './register-service-worker';
import { global } from './global';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

const App = require('./components/App').default;

const render = (Component) => {
  const renderMethod = module.hot ? ReactDOM.hydrate : ReactDOM.render;
  const main = document.getElementById('root');

  renderMethod(
    <Router>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component />
          </Provider>
        </ThemeProvider>
      </AppContainer>
    </Router>,
    main
  );
};

global();
render(App);
registerServiceWorker();