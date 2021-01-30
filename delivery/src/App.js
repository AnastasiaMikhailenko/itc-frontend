import React, { Component } from 'react';
import Main from './Main';
import Cataloge from './Cataloge'
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Main} />
          <Route path = "/cataloge" component = {Cataloge} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
