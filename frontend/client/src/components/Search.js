import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchedText: ''
        }
    }
    
    handleTextInput(e) {

    }

    handleSubmitText(e) {

    }

    render() {
        return (
            <div className="search-containter">
                <div className='input-container'>
                    Search image
                    <form onSubmit={this.handleSubmitText}>
                        <label>
                            <input value={this.state.searchedText} onChange={this.handleTextInput}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;
