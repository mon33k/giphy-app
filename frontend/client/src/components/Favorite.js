import React from 'react';

const Favorite = (props) => {
    console.log('thestuffs',props.component)
        return (
            <div>
                {props.component.map((e) => (
                    <img src={e.url} alt={e.alt} key={e.key} />
                ))}
            </div>
        )
}

export default Favorite;