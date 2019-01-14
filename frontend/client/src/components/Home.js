import React from 'react';
import '../stylesheets/Home.css';
import homeImg from '../stylesheets/loop-dreams.gif';

const Home = () => {
    return(
        <div className='home-container'>
            <h1 className='home-header'> </h1>
            <img className='home-img' src={homeImg} alt=''/>
        </div>
    )
}

export default Home;