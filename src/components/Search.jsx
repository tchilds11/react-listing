import React from 'react';
import { useState } from 'react';
import { Route } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import '../Style.css';

const SearchForm = ({handleListingList}) => {
    const [jobs, setJobs] = useState('');


    const _handleChange = (e) => {
        setJobs(e.target.value)
      };
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        const jobResults = await fetch(`http://127.0.0.1:3001/jobs/?url=https://jobs.github.com/positions.json?description=${jobs}` ,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        }).then((response) => response.json())
        console.log("search results", jobResults);
        handleListingList(jobResults);
      }
 

        return (
            <>
                <div>
                <Route exact path='/'>
                <ReactBootStrap.Form onSubmit={_handleSubmit}>
                        <ReactBootStrap.Form.Group controlId="formBasicEmail">
                            <ReactBootStrap.Form.Label>Job Title</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="text" onChange={_handleChange} value={jobs} placeholder="Enter Keywords" />
                            <ReactBootStrap.Form.Text className="text-muted">
                            We'll never share your searches with anyone else.
                            </ReactBootStrap.Form.Text>
                        </ReactBootStrap.Form.Group>

                        <ReactBootStrap.Form.Group controlId="formBasicPassword">
                            <ReactBootStrap.Form.Label>Location</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="text" placeholder="📍 Enter City" />
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
                            <ReactBootStrap.Form.Check type="checkbox" label="Save My Search" />
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Button variant="primary" data-testid="search-button" type="submit" onClick={_handleSubmit}>
                            Search
                        </ReactBootStrap.Button>
                </ReactBootStrap.Form>
                </Route>
                </div>    
            </>
        )
    }

export default SearchForm; 