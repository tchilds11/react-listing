import React from 'react';
import Search from "./components/Search";
import { BrowserRouter as Router } from "react-router-dom";
// import './App.css';


function App() {
	return (
	  <div className="App">
		<Router>
		  <Search />
		</Router>
	  </div>
	);
  }
  
  export default App;