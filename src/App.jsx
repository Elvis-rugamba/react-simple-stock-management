/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Items from './views/pages/items';
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <h1>Welcome to Stock Management System</h1>}
            />
            <Route exact path='/items'>
              <Items />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
