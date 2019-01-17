import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './stylesheets/App.css';
import Home from './components/Home';
import GiphyGifs from './components/GiphyGifs';

class App extends Component {
  state = {
    test: ''
  }

  myMethod = (value) => {
    this.setState(prevState => ({ test: value }))
    console.log(this.state)
  }

  render() {
    return (
      <div className='main-container'>
        <nav className='nav-bar'>
          <li><Link to="/">Home</Link></li>
          {"  "}
          <li><Link to="/giphy/search">Search</Link></li>
          {"  "}
          <li><Link to="/giphy/random">Random</Link></li>
          {"  "}
          <li><Link to="/giphy/favorites">Favorite</Link></li>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/giphy" component={GiphyGifs} />
        </Switch>
      </div>
    );
  }
}

export default App;