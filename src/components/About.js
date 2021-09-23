import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className='about-container'>
      <h1>About me</h1>
      <div className='infopic-container'>
        <div className='photo'>
          <img src='pics/photo.jpeg' alt="It's me" />
        </div>
        <div className='info'>
          <p>
            Hi! My name is Mike Alessi and I'm a former Tech Salesperson turned
            Full-stack Developer. I've always had an interest in web development
            which might have stemmed from building simple personal websites on
            Geocities or customizing my (now non-existent) MySpace page back in
            the day.
          </p>{" "}
          <p>
            I'm a recent graduate of Fullstack Academy's Software Engineering
            Immersive bootcamp and am excited to continue my journey
            professionally.{" "}
          </p>
        </div>
      </div>
      <div className='technologies'>tech</div>
    </div>
  );
}
