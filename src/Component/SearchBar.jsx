import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useState } from 'react';
import SearchResults from '../Pages/SearchResults';

export default function SearchBar({ setSearchResults }) {

const apiKey = import.meta.env.VITE_APP_API_KEY

const [input, setInput] = useState(" ");

// const url = `https://api.shodan.io/shodan/host/search?key=${apiKey}&query=${value}`;

// const fetchData = async () => {
//   try {
//     const response = await fetch(url)
//     const data = await response.json();
//     setInput(data)
//     console.log(data)
//   } catch (e) {
//       console.error(e)
//   }
//   }

// useEffect(() => {
//   fetchData();
// }, []);

const fetchData = (value) => {
  fetch(`https://api.shodan.io/shodan/host/search?key=${apiKey}&query=${value}`).then((response) => response.json()).then((json) => {
    props.setSearchResults(json);
    setSearchResults(SearchResults);
  });


};

const handleChange = (event) => {
  setInput(event.target.value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  fetchData(input)
}

  return (
    <div className='input-wrapper'>
    <FaSearch id="search-icon"/> 
      <form onSubmit={handleSubmit}>
      <input id="type-to-search" placeholder='Type to search...' value={input} onChange={handleChange}/>
        <div id='submit-box'>
          <input id='submit' type='submit'></input>
        </div>
      </form>
    {/* see notes */}
    </div>
  )
}


// line 15: e stands for element. this line is like saying set the value of "e," when there is a change, and set that value to setInput state varible. So now we have this data that the user input stored into state varibale. 

// At first it said setInput, to reflect what wa store in the search bar, but later we changed that to handle change because the data that is inputted into the serach bar (on line 17, with asyc with the data in the api)

// the use of then on line 10: Because the fetch is asyncronous, and it returns the value of the data later in time, you have to chain a .then fucntion onto it, which awaits for the results and then performs actions on it. 
// then we have to convert the recived data into JASON which can be read by javascript (response.json). then we add on another .then and put the json value within that, so that  cthe json data can exit the function. 

// when U use https://api.shodan.io/api-info?key=${process.env.VITE_APP_API_KEY}, it just shows how much credit my account had for the month. So adding this info into the fetch data is not what I want. 

// Line 10: Because I am not using plain react, I have to use a differnt way to insert api-keys other than process.env.REACT_APP_API_KEY. this syntax does not work for vite and it will throw off the entire project (thus my white screen)

// line 35, i cna put value= if i want to chnage the workds on the button.