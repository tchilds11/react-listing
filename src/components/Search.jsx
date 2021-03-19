import React from 'react';
import { useState } from 'react';
import { Route } from "react-router-dom";
import '../Style.css';

const SearchForm = ({handleListingList}) => {
    const [jobs, setJobs] = useState('');


    const _handleChange = (e) => {
        setJobs(e.target.value)
      };
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        const jobResults = await fetch(`http://127.0.0.1:3001/jobs/?url=https://jobs.github.com/positions.json?search=${jobs}` ,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        }).then((response) => response.json())
        console.log(jobResults);
        handleListingList(jobResults);
      }
 

        return (
            <>
                <div>
                    <Route exact path='/'>
                    <form onSubmit={_handleSubmit}>
                        <div className="container">
                            <h2 className="heading"> Listing Lurker</h2>
                            <label className="search-label" htmlFor="search-input">
                                <input type="text" value={jobs} id="search-input" placeholder="Search..." onChange={_handleChange}/>
                                <button type="submit" onClick={_handleSubmit} className="fa fa-search search-icon"></button>
                            </label>
                        </div>
                    </form>
                    </Route>
                </div>    
            </>
        )
    }

export default SearchForm; 