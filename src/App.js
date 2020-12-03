import React from 'react';
import PropTypes from 'prop-types';

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../src/store/app-store';
import LoginComponent from '../src/components/login-component.js';
import PlanetsComponent from '../src/components/planets-component';

export default class AppContainer extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/planets" component={PlanetsComponent} />
          </div>
        </Router>
        </Provider>
    )
  }
}

AppContainer.contextTypes = { store: PropTypes.object };