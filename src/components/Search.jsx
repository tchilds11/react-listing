import React, { Component } from 'react';
import '../Style.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:'',
            loading: false,
            message:'',
            results: {},
        };
}

handleSearchChange = (event) => {
    const query = event.target.value;
        this.setState({query, loading: true, message: ''});
};


render() {
    return (
        <div className="container">
            <h2 className="heading"> Listing Lurker</h2>
            <label className="search-label" htmlFor="search-input">
                <input type="text" value="" id="search-input" placeholder="Search..." onChange={this.handleSearchChange}/>
                <i className="fa fa-search search-icon"/>
            </label>
        </div>
    )
}}

export default Search;