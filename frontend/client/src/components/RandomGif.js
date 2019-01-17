import React, { Component } from 'react';
import giphyAPI from '../api/giphyAPI';
import '../stylesheets/RandomGif.css'

class RandomGif extends Component {
    constructor() {
        super()
        this.state = {
            randomImgURL: []
        }
    }

    getRandomPicture = () => {
        giphyAPI.getRandomGif().then(response => {
            let result = response.data.data
            this.setState({
                randomImgURL: [...this.state.randomImgURL, { random_ImgURL: result.image_url, id: result.id, img_width: result.image_width, img_height: result.image_height, title: result.title }]
            })
        })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { randomImgURL } = this.state

        return (
            <div className='random-container'>
                <div className='button-container'>
                    <button className='button' onClick={this.getRandomPicture}>Click To Get Random Gif</button>
                </div>

                <div className='random-img-container'>
                    {randomImgURL.map((e) => (
                        <li className='img-item-container'><img className='img-item' src={e.random_ImgURL} alt={e.title} key={e.id} /></li>
                    ))}
                </div>
            </div>
        )
    }
}

export default RandomGif;