import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './stylesheets/App.css';
import Home from './components/Home';
import Search from './components/Search';
import Favorite from './components/Favorite';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <nav>
          <Link to="/">Home</Link>
          {"  "}
          <Link to="/Search">Search</Link>
          {"  "}
          <Link to="/favorite">Favorite</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/Search' component={Search}/>
          <Route path='/Favorite' component={Favorite}/>
        </Switch>
      </div>
    );
  }
}

export default App;
