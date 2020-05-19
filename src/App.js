import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Portfolio from './Components/Routes/Portfolio';
import Blog from './Components/Routes/Blog';
import About from './Components/Routes/About';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  typography: { h2: { fontFamily: 'Quicksand, sans-serif'}}
})

export default class App extends Component {
  render() {
    return(
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            
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
            <Footer />
            </CssBaseline>
        </MuiThemeProvider>
      </Router>
    );
  }
}
