import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-welcome'>
        <h3>Welcome!</h3>
      </div>
      <div className='links'>
        <Link to='/about' className='no-underline'>
          <div className='header-link'>
            <h4>About</h4>
          </div>
        </Link>
        <Link to='/projects' className='no-underline'>
          <div className='header-link'>
            <h4>Projects</h4>
          </div>
        </Link>
        <Link to='/contact' className='no-underline'>
          <div className='header-link'>
            <h4>Contact</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}
