import React, {Component} from 'react';
import {Link, Route, Switch, Redirect } from 'react-router-dom';
import Favorites from './Favorites';
import RandomGif from './RandomGif';
import SearchGif from './SearchGif';
const axios = require('axios');

class GiphyGifs extends Component {
    constructor() {
        super()
        this.state = {
            favorites: []
        } 
    }
   
    randomGif = () => {
        return (
            <RandomGif addFave={this.addFave}/>
        )
    }

    renderSearchTab = () => {
        return (
            <SearchGif addFave={this.addFave}/>
        )
    }

    renderFavorites = () => {
        return (
            <Favorites favorites={this.state.favorites} unfavoriteAGif={this.handleUnfavoriteGif} />
        )
    }

    addFave = url => {
        const {favorites} = this.state
        this.setState({
            favorites: [...favorites, url]
        })
    }

    handleUnfavoriteGif = (url2Delete) => {
        const unfavoriteGif = this.state.favorites.filter((elem) => url2Delete.url !== elem.url)
        // console.log("deleted arr", unfavoriteGif)
        // console.log('url2delete',url2Delete)
    
        this.setState({
          favorites: unfavoriteGif
        })
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route path="/giphy/search" render={this.renderSearchTab} />
                    <Route path="/giphy/random" render={this.randomGif} />
                    <Route path="/giphy/favorites" render={this.renderFavorites} />
                </Switch>
            </div>
        )
    }
}

export default GiphyGifs;


