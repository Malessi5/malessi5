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
            <img src='pics/logos/jslogo.png' alt='Javascript' />
            <p>JavaScript</p>
          </div>
          <div className='technology'>
            <img src='pics/logos/htmllogo.png' alt='HTML' />
            <p>HTML</p>
          </div>
          <div className='technology'>
            <img src='pics/logos/csslogo.png' alt='CSS' />
            <p>CSS</p>
          </div>{" "}
          <div className='technology'>
            <img src='pics/logos/reactlogo.png' alt='React' />
            <p>React.js</p>
          </div>
          <div className='technology'>
            <img src='pics/logos/reduxlogo.png' alt='Redux' />
            <p>Redux.js</p>
          </div>
          <div className='technology'>
            <img src='pics/logos/nodelogo.png' alt='Node' />
            <p>Node.js</p>
          </div>
          <div className='technology'>
            <img src='pics/logos/firebaselogo.png' alt='Firebase' />
            <p>Firebase</p>
          </div>
          <div className='technology'>
            <img src='pics/logos/postgreslogo.png' alt='PostgreSQL' />
            <p>PostgresSQL</p>
          </div>
          <div className='technology'>
            <img src='pics/logos/gitlogo.png' alt='Git' />
            <p>Git</p>
          </div>
          <div className='technology'>
            <img src='pics/logos/muilogo.png' alt='Material UI' />
            <p>Material UI</p>
          </div>
        </div>
      </div>
      <div>
        <div className='learning-more'>
          <h3>Interested in learning a bit more about me?</h3>
          <div className='learn-more-links-container'>
            <a
              href='./resume/Michael-Alessi-resume-2021.pdf'
              target='blank'
              className='learn-more-link'
            >
              <b>View Resume</b>
            </a>
            <a
              href='https://github.com/Malessi5'
              target='blank'
              className='learn-more-link'
            >
              <img src='pics/logos/githublogolong.png' alt='github' />
            </a>
            <a
              href='https://www.linkedin.com/in/mpalessi/'
              target='blank'
              className='learn-more-link'
            >
              <img src='pics/logos/linkedinlogo.png' alt='linkedin' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
