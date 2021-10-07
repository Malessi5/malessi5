import React, {useState} from "react";
import "./Header.css";
import {Link} from "react-router-dom";

export default function Header() {
  const [selected, setSelected] = useState("projects");

  function clickHandle(link) {
    console.log(link);
    setSelected(link);
  }

  return (
    <div className='header-container'>
      <div className='header-welcome'>
        <h3>Mike Alessi - Full Stack Developer</h3>
      </div>
      <div className='links'>
        <Link
          to='/projects'
          className={
            selected === "projects"
              ? "no-underline selected-link"
              : "no-underline"
          }
          onClick={() => {
            clickHandle("projects");
          }}
        >
          <div className='header-link' id='projects'>
            <h4>Projects</h4>
          </div>
        </Link>
        <Link
          to='/about'
          className={
            selected === "about" ? "no-underline selected-link" : "no-underline"
          }
          onClick={() => {
            clickHandle("about");
          }}
        >
          <div className='header-link'>
            <h4 id='about'>About</h4>
          </div>
        </Link>
        <Link
          to='/contact'
          className={
            selected === "contact"
              ? "no-underline selected-link"
              : "no-underline"
          }
          onClick={() => {
            clickHandle("contact");
          }}
        >
          <div className='header-link'>
            <h4 id='contact'>Contact</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}
