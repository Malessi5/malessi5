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
            Full-stack Developer. I love learning about new technologies and
            solving problems. I've always had an interest in web development
            which might have stemmed from building simple personal websites on
            Geocities back in the day or customizing my (now non-existent)
            MySpace.
          </p>{" "}
          <p>
            I'm a recent graduate of Fullstack Academy's Software Engineering
            Immersive bootcamp and am excited to continue my journey
            professionally.{" "}
          </p>
        </div>
      </div>
      <div className='technologies-container'>
        <h2>Here's some of the technology I've been working with: </h2>
        <div className='technologies'>
          <div className='technology'>
            <img src='pics/jslogo.png' alt='Javascript' />
            <p>JavaScript</p>
          </div>
          <div className='technology'>
            <img src='pics/htmllogo.png' alt='HTML' />
            <p>HTML</p>
          </div>
          <div className='technology'>
            <img src='pics/csslogo.png' alt='CSS' />
            <p>CSS</p>
          </div>{" "}
          <div className='technology'>
            <img src='pics/reactlogo.png' alt='React' />
            <p>React.js</p>
          </div>
          <div className='technology'>
            <img src='pics/nodelogo.svg' alt='Node' />
            <p>Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}
