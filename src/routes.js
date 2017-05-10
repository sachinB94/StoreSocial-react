import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import { Home, Signup, Dashboard } from './components/pages';

import { store } from './index';

const isAuthenticated = (nextState, replace) => {
  const { isLoggedIn } = store.getState().auth;
  if (!isLoggedIn) {
    replace('/');
  } else if (nextState.location.pathname === '/') {
    replace('/dashboard');
  }
};

const isNotAuthenticated = (nextState, replace) => {
  const { isLoggedIn } = store.getState().auth;
  if (isLoggedIn) {
    replace('/dashboard');
  }
};

export default (
  <Route>
    <Route component={App}>
      <Route path="/" component={Home} onEnter={isNotAuthenticated} />
      <Route path="/signup" component={Signup} onEnter={isNotAuthenticated} />
      <Route
        path="/dashboard"
        component={Dashboard}
        onEnter={isAuthenticated}
      />
    </Route>
  </Route>
);
