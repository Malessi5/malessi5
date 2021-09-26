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
            Hi! My name is Mike Alessi and I'm a former tech Salesperson turned
            Full-stack Developer and a recent graduate of Fullstack Academy. I
            love building things, solving problems, and learning about new
            technologies. I've always had an interest in web development which
            have stemmed from building simple personal websites on Geocities
            back in the day.
          </p>
        </div>
      </div>
      <div className='technologies-container'>
        <h3>Here's some of the technology I've been working with lately: </h3>
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
            <img src='pics/reduxlogo.png' alt='Redux' />
            <p>Redux.js</p>
          </div>
          <div className='technology'>
            <img src='pics/nodelogo.png' alt='Node' />
            <p>Node.js</p>
          </div>
          <div className='technology'>
            <img src='pics/gitlogo.png' alt='Git' />
            <p>Git</p>
          </div>
          <div className='technology'>
            <img src='pics/muilogo.png' alt='Material UI' />
            <p>Material UI</p>
          </div>
          <div className='technology'>
            <img src='pics/firebaselogo.png' alt='Firebase' />
            <p>Firebase</p>
          </div>
          <div className='technology'>
            <img src='pics/postgreslogo.png' alt='PostgreSQL' />
            <p>PostgresSQL</p>
          </div>
        </div>
      </div>
      <div>download resume</div>
    </div>
  );
}
