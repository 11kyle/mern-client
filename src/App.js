import React, { Component } from 'react';
import { 
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Portfolio from './Components/Routes/Portfolio';
import Blog from './Components/Routes/Blog';
import About from './Components/Routes/About';
import { 
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline
} from '@material-ui/core';

const axios = require('axios');

const theme = createMuiTheme({
  typography: { 
    h2: { 
      fontFamily: 'Quicksand, sans-serif'
    }
  },
  palette: {
    primary: {
      main: '#EB6D4A'
    }
  }
});

export default class App extends Component {

  constructor(props) {
    super();
    this.state = {
      blogposts: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getBlogposts();
  }

  getBlogposts = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://kj-portfolio.herokuapp.com/api/blogpost')
      .then(response => {
        this.setState({
          blogposts: response.data,
          loading: false,
        });
      })
      .catch(error => {
        console.log(`Error fetching and parsing data`, error);
      });
  }

  render() {
    return(
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <Header />
            <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route path='/blog'>
                {
                  (this.state.loading)
                    ?<p>Loading...</p>
                    : <Blog blogposts={this.state.blogposts} />
                }
                  </Route>
              <Route  exact path='/'>
                <About />
              </Route>
            </Switch>
            <Footer />
          </CssBaseline>
      </MuiThemeProvider>
    );
  }
}
