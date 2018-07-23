import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import MainPage from 'components/pages/Main';
import NotFound from 'components/pages/NotFound';

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default MainRouter;