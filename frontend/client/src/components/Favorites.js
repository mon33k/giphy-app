import React, { Component } from 'react';
import '../stylesheets/Favorites.css'

class Favorites extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { favorites } = this.props
        favorites.shift()
        console.log('faves', favorites)
        return (
            <div className='favorites-container'>
                {favorites.map((e, i) => (
                    <div className='fave-img-container'>
                        <img className='fave-img-item' src={e[i].url} key={e[i].key} alt={e[i].alt} />
                    </div>
                ))}
            </div>
        )
    }
}

export default Favorites;


