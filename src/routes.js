import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import Login from './components/Signin/index';
import Homepage from './components/Home/index';
import store from './store/index';

const checkIfAuthenticated = (Component) => {
  const { authenticated } = store.getState().loginReducer;

  return authenticated !== false
    ? <Component />
    : <Redirect to="/" />;
};

const HandleRouting = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" render={() => checkIfAuthenticated(Homepage)} />
    </Switch>
  </Router>
);

export default HandleRouting;
