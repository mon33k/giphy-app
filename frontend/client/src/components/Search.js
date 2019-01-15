// import React, { Component } from 'react';
// import { Link, Route, Switch, Redirect } from 'react-router-dom';
// import '../stylesheets/Search.css'
// import Favorite from './Favorite';
// // import Favorite from './Favorite'
// const axios = require('axios');

// class Search extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             searchedText: '',
//             url: [],
//             imageClicked: [],
//             selectedGif: ''
//         }
//     }

//     handleTextInput = (e) => {
//         this.setState({
//             searchedText: e.target.value
//         })
//     }

//     handleSubmitText = (e) => {
//         e.preventDefault();

//         axios.get(`https://api.giphy.com/v1/gifs/search?api_key=EP6eZCjJPRD44EqfaWEqTQfR5XC7antV&q=${this.state.searchedText}&limit=25&offset=0&rating=G&lang=en`)
//             .then((response) => {
//                 response.data.data.forEach((e) => {
//                     // if(this.state.url.length >= 25) {
//                     //     count
//                     // }
//                     this.setState({
//                         url: [...this.state.url, { url: e.images.original.url, id: e.id, title: e.title }]
//                     })
//                 })
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     handleClickImage = (e) => {
//         let imageClicked = []
//         let url = `favorite/${e.target.id}`
//         this.setState({ selectedGif: url })

//         // this.setState({
//         //     imageClicked: [...this.state.imageClicked, { url: e.target.src, alt: e.target.alt, key: e.target.id }]
//         // })
//     }

//     render() {
//         const { imageClicked, selectedGif } = this.state
//         // if(selectedGif){
//         //     return (<Redirect to={selectedGif}/>)
//         // }
//         console.log(this.props)
//         return (
//             <div className='search-container'>
//                 <div className='input-container'>
//                     Search image
//                     <form onSubmit={this.handleSubmitText}>
//                         <label>
//                             <input value={this.state.searchedText} onChange={this.handleTextInput} />
//                         </label>
//                         <input type="submit" value="Submit" />
//                     </form>
//                 </div>
//                 <React.Fragment>
//                     <button onClick={() => this.props.test('Poop Lord')}>Hello</button>}
//                 </React.Fragment>
//                 <div className='search-img-container'>
//                     {this.state.url.map((e) => (
//                         <li className='img-item-container'><img onClick={this.handleClickImage} className='img-item' src={e.url} alt={e.title} id={e.id} key={e.id} /></li>
//                     ))}
//                 </div>
//                 {/* {imageClicked ? <Redirect to={`/favorite/${imageClicked.key}`} /> : ''} */}
//                 {/* <Route exact path="/search" render={() => (
//                     imageClicked ? (
//                         <Redirect to={`/favorite/${imageClicked.key}`} component={imageClicked} />
//                     ) : (
//                             <Search />
//                         )
//                 )} /> */}
//             </div>
//         )
//     }
// }

// export default Search;
