import React, {Component} from 'react';

class Favorites extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { favorites } = this.props
        console.log('fave',favorites)
        return(
            <div>
                {favorites.map((e, i) => (
                    <img src={e[i].url} key={e[i].key} alt={e[i].alt}/>
                ))}
            </div>
        )
    }
}

export default Favorites;