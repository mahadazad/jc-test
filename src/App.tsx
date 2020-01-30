import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import SaveProfile from 'pages/SaveProfile';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import { GlobalStyle } from 'app-globals';
import store from 'store';
import navigation from 'navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={navigation}>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/save-profile" exact>
              <SaveProfile />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
