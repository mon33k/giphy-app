import React, { Component } from 'react';
import '../stylesheets/Favorites.css'

class Favorites extends Component {

    handleUnclickFavorite = (e) => {
        // console.log('e', e.target)
        let deletedItem = { url: e.target.src, alt: e.target.alt, key: e.target.id, heartClick: false }
        this.props.unfavoriteAGif(deletedItem)
    }

    render() {
        const { favorites } = this.props

        return (
            <div>
                <h1 className='fave-header'>Click The Image To Unfavorite It</h1>
                <div className='favorites-container'>
                    {favorites.map((e, i) => (
                        <div className='fave-img-container'>
                            <img className='fave-img-item' onClick={this.handleUnclickFavorite} src={e.url} key={e.key} alt={e.alt} />
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}

export default Favorites;


