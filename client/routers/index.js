import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import About from 'components/About';
import Contacts from 'components/Contacts';
import NotFound from 'components/pages/NotFound';

class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default MainRouter;