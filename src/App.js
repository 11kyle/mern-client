import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import Portfolio from './Components/Routes/Portfolio';
import Blog from './Components/Routes/Blog';
import About from './Components/Routes/About';

export default class App extends Component {
  render() {
    return(
      <Router>
        <Header />
        <Switch>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>

      </Router>
    );
  }
}
