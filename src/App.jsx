
// import { useState } from 'react'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
// import SearchBar from './Component/SearchBar';
import OurFocus from "./Pages/OurFocus";
import LurkList from "./Pages/LurkList";
import Topics from './Pages/Topics';
import SearchResults from "./Pages/SearchResults";
import MainPage from './Pages/MainPage';
import NavBar from './Component/NavBar';


export default function App() {

  // const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <div className='App'>
        <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/ourfocus" element={<OurFocus />} />
        <Route path="/lurklist"  element={<LurkList />} />
        <Route path="/topics"  element={<Topics />} />
        <Route path="/searchresults:" element={<SearchResults />} />
      </Routes>
      </div>
    </>
  )
}


// !!!!!!!THE ELEMENT NOT ELEMENTS !!!!!!!