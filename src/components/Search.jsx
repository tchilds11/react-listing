import React, { Component } from 'react';
import '../Style.css';
import ListingList from './ListingList';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobQuery:'',
            jobResults: [],
        };
    }


    _handleChange = (e) => {
        this.setState({
          jobQuery: e.target.value,
        });
      };
    
      _handleSubmit = async (e) => {
        e.preventDefault();
        const { jobQuery } = this.state;
        const jobResultsData = await fetch(`http://127.0.0.1:3001/jobs/?url=https://jobs.github.com/positions.json?description=${jobQuery}` ,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        }).then((response) => response.json())
        console.log(jobResultsData);
        this.setState({
            jobResults: [...this.state.jobResults, jobResultsData],
            jobQuery: '',
        })
      };
 

    render() {
        const { jobQuery } = this.state
        return (
            <>
                <div>
                    <form>
                        <div className="container">
                            <h2 className="heading"> Listing Lurker</h2>
                            <label className="search-label" htmlFor="search-input">
                                <input type="text" value={jobQuery} id="search-input" placeholder="Search..." onChange={this._handleChange
                        }/>
                                <button type="submit" onClick={this._handleSubmit} className="fa fa-search search-icon"></button>
                            </label>
                        </div>
                    </form>
                    {this.state.jobResults.length ? (<ListingList jobs={this.state.jobResults}/>) : <p>No users...</p>}
                </div>    
            </>
        )
    }}

export default Search; 