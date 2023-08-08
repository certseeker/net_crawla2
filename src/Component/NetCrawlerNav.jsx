import React from 'react';
import { Link } from 'react-router-dom';
import "./netCrawlerNav.css";


export default function NetCrawlerNav() {
  return (
    <div> 
      <Link to="/mainpage">
        <p id='netCrawler'>
        netCrawler</p>
      </Link>
    </div>
  )
}
