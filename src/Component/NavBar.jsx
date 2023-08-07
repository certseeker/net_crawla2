import { Link } from "react-router-dom"; 
import "./NavBar.css"
// import React from 'react'

export default function NavBar() {
  return (
    <div id="nav-box"> 
      <ul id="nav">
        <li>
          <Link to="/ourfocus">
            <h3>Our Focus</h3>
          </Link>
        </li>
        <li>
          <Link to="/lurklist">
            <h3>Lurk List</h3>
          </Link>
          </li>
          <li>
          <Link to="/topics">
            <h3>Topics</h3>
          </Link>
        </li>
      </ul>
    </div>
  )
}

