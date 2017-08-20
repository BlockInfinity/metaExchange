/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';

import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import MainView from './views/Main';
import MinorView from './views/Minor';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={CounterPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/main" component={MainView} />
      <Route path="/minor" component={MinorView} />
    </Switch>
  </App>
);
