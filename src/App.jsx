// import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
// import SearchBar from './Component/SearchBar';
import OurFocus from "./Pages/OurFocus";
import LurkList from "./Pages/LurkList";
import SearchResults from "./Pages/SearchResults";
import MainPage from './Pages/MainPage';


export default function App() {

  // const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <div className='App'>
        <Routes>
        <Route path="/" elements={<OurFocus />} />
        <Route path="/ourfocus" elements={<OurFocus />} />
        <Route path="/lurklist"  elements={<LurkList />} />
        <Route path="/searchresults" elements={<SearchResults />} />
      </Routes>
      </div>
        <MainPage />
      {/* <div className='search-bar-container'>
        <SearchBar setSearchResults={setSearchResults}/>
        <div>search reults</div>
      </div> */}
    </>
  )
}


