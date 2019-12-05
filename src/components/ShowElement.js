import React, { Component }  from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showResults: false
        }
    }
    
    getInitialState = () => {
        return { showResults: false };
    }

    onClick = () => {
        this.setState({ showResults: true });
    }
    
    render() {
        return (
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? null : <input type="submit" value="Search" onClick={this.onClick} /> }
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
}

class Results extends Component {
    render() {
        return (
            <div id="results" className="search-results">
                Some Results
            </div>
        );
    }
}

export default Search