import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './stylesheets/App.css';
import Home from './components/Home';
import Search from './components/Search';
import Favorite from './components/Favorite';

class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <nav className='nav-bar'>
          <li><Link to="/">Home</Link></li>
          {"  "}
          <li><Link to="/Search">Search</Link></li>
          {"  "}
          <li><Link to="/favorite">Favorite</Link></li>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/search' component={Search}/>
          <Route path='/favorite/:id' component={Favorite}/>
        </Switch>
      </div>
    );
  }
}

export default App;
