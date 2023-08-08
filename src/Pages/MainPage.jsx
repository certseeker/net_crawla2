import React from 'react'
import "./MainPage.css"
import { useState } from 'react';
import CrouchingPanther from '../Component/CrouchingPanther';
import NavBar from '../Component/NavBar';
import SearchBar from '../Component/SearchBar';
import SearchResults from './SearchResults';
// if the 1 dot before the path doesnt Work, try 2. it seems like 2 dots in like a "pivot" into the correct folder


export default function MainPage() {


  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className='main-page'>
      <div className='net-crawler'>netCrawler</div>
      <div id="side-container">
          <NavBar />
      </div>
        <div className='search-bar-container'>
          <SearchBar setSearchResults={setSearchResults}/>
          {/* <SearchResults searchResults={searchResults}/> */}
          <div>
            <CrouchingPanther />
          </div>
        </div>
    </div>
  )
}
