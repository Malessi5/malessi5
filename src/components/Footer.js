import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import lilogo from "../pics/logos/roundli.png";
import ghlogo from "../pics/logos/ghlight.jpg";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <a href='https://github.com/Malessi5' target='blank'>
          <img src={ghlogo} className='footer-link' alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/mpalessi/' target='blank'>
          <img className='footer-link' src={lilogo} alt='linkedin' />
        </a>
      </div>
      <div className='footer-cp'>
        <p className='copyright'>Copyright © 2021 Michael Alessi</p>
      </div>
      <div className='footer-contact'>
        <Link to='/contact' style={{textDecoration: "none", color: "white"}}>
          Contact Me
        </Link>
      </div>
    </div>
  );
}
