import React from 'react';
import ListingList from './components/ListingList';
import { useState } from 'react';
import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListingDetails from './components/ListingDetails';
// import './App.css';


function App() {

const [listingList, setlistingList]= useState([]);

const handleListingList = (status) => {
	setlistingList(status)
}


	return (
	  <div className="App">
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