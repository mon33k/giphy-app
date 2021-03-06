import React, { Component } from 'react';
import giphyAPI from "../api/giphyAPI";
import '../stylesheets/SearchGif.css'
import likedHeart from '../stylesheets/likedHeart.png';

class SearchGif extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifList: [],
            searchedText: ""
        }
    }

    submitSearchResults = (e) => {
        e.preventDefault();
        const { searchedText } = this.state
        giphyAPI.getSearchedGifs(searchedText).then(response => {
            response.data.data.forEach((e) => {
                this.setState({
                    gifList: [...this.state.gifList, { url: e.images.original.url, id: e.id, title: e.title, heartClick: false }]
                })
            })
        })
    }

    handleTextInput = (e) => {
        this.setState({
            searchedText: e.target.value
        })
    }

    handleClickImage = (e) => {
        this.props.addFave({ url: e.target.src, alt: e.target.alt, key: e.target.id, heartClick: true })
    }

    render() {
        return (
            <div className='search-container' >
                <div className='input-container'>
                    Search image
                     <form onSubmit={this.submitSearchResults}>
                        <label>
                            <input value={this.state.searchedText} onChange={this.handleTextInput} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className='search-img-container'>
                    {this.state.gifList.map((e) => (
                        <div className='img-item-container'>
                            <img onClick={this.handleClickImage} className='img-item' src={e.url} alt={e.title} id={e.id} key={e.id} />
                        </div>
                    ))}
                </div>
                <div className='heart-img'>

                </div>
            </div>
        )
    }
}

export default SearchGif;

