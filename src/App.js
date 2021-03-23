import React from 'react';
import ListingList from './components/ListingList';
import { useState } from 'react';
import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListingDetails from './components/ListingDetails';
import * as ReactBootStrap from "react-bootstrap";
// import './App.css';

function App() {

const [listingList, setlistingList]= useState([]);

const handleListingList = (status) => {
	setlistingList(status)
}

	return (
	  <div className="App">
		  <ReactBootStrap.Navbar sticky="top" collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/">Listing Lounge</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features">Account Information</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Saved Listings</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="External Quick Links" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="https://jobs.github.com/positions?utf8=%E2%9C%93&description=java&location=">Java</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="https://jobs.github.com/positions?utf8=%E2%9C%93&description=javascript&location=">Javascript</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="https://jobs.github.com/positions?utf8=%E2%9C%93&description=redux&location=">Redux</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="https://jobs.github.com/positions?utf8=%E2%9C%93&description=react&location=">React</ReactBootStrap.NavDropdown.Item>
		<ReactBootStrap.NavDropdown.Item href="https://jobs.github.com/positions?utf8=%E2%9C%93&description=python&location=">Python</ReactBootStrap.NavDropdown.Item>
		<ReactBootStrap.NavDropdown.Item href="https://jobs.github.com/positions?utf8=%E2%9C%93&description=node&location=">Node</ReactBootStrap.NavDropdown.Item>
		<ReactBootStrap.NavDropdown.Item href="https://jobs.github.com/positions?utf8=%E2%9C%93&description=express&location=">Express</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">About The Developer</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Log Out
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
		<Router>
			<Route exact path='/'>
				<Search handleListingList={handleListingList} />
				<ListingList listingList={listingList}/> : 
			</Route>
			<Route path='/jobs/:id'>
				{listingList.length !== 0 ?
				<ListingDetails listingList={listingList}/> : 
				<ReactBootStrap.Spinner animation="border" />
			}
			</Route>
		</Router>
	  </div>
	);
  }
  
  export default App; 