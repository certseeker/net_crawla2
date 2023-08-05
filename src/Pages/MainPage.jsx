import React from 'react'
import { Link } from 'react-router-dom';
import "./MainPage.css"
import { useState } from 'react';
import NavBar from '../Component/NavBar';
import SearchBar from '../Component/SearchBar';
// if the 1 dot before the path doesnt Work, try 2. it seems like 2 dots in like a "pivot" into the correct folder


export default function MainPage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <div className='main-page'>
        <div className='search-bar-container'>
          <SearchBar setSearchResults={setSearchResults}/>
          <div>search reults</div>
        <div id="side-container">
          <nav>
            <NavBar />
          </nav>
        </div>
        </div>
      </div>
      <div>MainPage</div>
    </div>
  )
}
