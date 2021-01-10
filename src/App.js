import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNavbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainNavbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
