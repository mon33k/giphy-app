const axios = require('axios');

const getSearchedGifs = (searchedText) => axios.get(`https://api.giphy.com/v1/gifs/search?api_key=EP6eZCjJPRD44EqfaWEqTQfR5XC7antV&q=${searchedText}&limit=25&offset=0&rating=G&lang=en`);

const getRandomGif = () => axios.get(`https://api.giphy.com/v1/gifs/random?api_key=EP6eZCjJPRD44EqfaWEqTQfR5XC7antV&tag=&rating=G`);

export default {
    getSearchedGifs,
    getRandomGif
};