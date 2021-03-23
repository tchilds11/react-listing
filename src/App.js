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
		  <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/">Listing Lounge</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features">Account Information</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Saved Listings</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Quick Links" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Java</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Javascript</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Redux</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">React</ReactBootStrap.NavDropdown.Item>
		<ReactBootStrap.NavDropdown.Item href="#action/3.5">Python</ReactBootStrap.NavDropdown.Item>
		<ReactBootStrap.NavDropdown.Item href="#action/3.6">Node</ReactBootStrap.NavDropdown.Item>
		<ReactBootStrap.NavDropdown.Item href="#action/3.7">Express</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">Contact Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        About The Developer
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
		<Router>
			<Route exact path='/'>
				<Search handleListingList={handleListingList} />
				{listingList.length !== 0 ?
				<ListingList listingList={listingList}/> : 
				<h2>No Listings Found...</h2>
			}
			</Route>
			<Route path='/jobs/:id'>
				{listingList.length !== 0 ?
				<ListingDetails listingList={listingList}/> : 
				<h3>No Listings Found...</h3>
			}
			</Route>
		</Router>
	  </div>
	);
  }
  
  export default App; 