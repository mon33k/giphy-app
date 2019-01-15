import React, {Component} from 'react';
import {Link, Route, Switch, Redirect } from 'react-router-dom';
import Favorite from './Favorite';
import RandomGif from './RandomGif';
const axios = require('axios');


class GiphyGifs extends Component {
    constructor() {
        super()
        this.state = {
            favorites: []
        }
    }

    // randomGif = () => {
    //     return (
            
    //     )
    // }

    
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default GiphyGifs;