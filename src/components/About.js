import React from "react";
import "./About.css";
import photo from "../pics/photo.jpeg";
import jslogo from "../pics/logos/jslogo.png";
import htmlLogo from "../pics/logos/htmllogo.png";
import cssLogo from "../pics/logos/csslogo.png";
import reactLogo from "../pics/logos/reactlogo.png";
import reduxLogo from "../pics/logos/reduxlogo.png";
import nodeLogo from "../pics/logos/nodelogo.png";
import firebaseLogo from "../pics/logos/firebaselogo.png";
import postgresLogo from "../pics/logos/postgreslogo.png";
import gitLogo from "../pics/logos/gitlogo.png";
import muiLogo from "../pics/logos/muilogo.png";
import githubLongLogo from "../pics/logos/githublogolong.png";
import linkedInLogo from "../pics/logos/linkedinlogo.png";
import resume from "../pics/resume/Michael-Alessi-resume-2021.pdf";

export default function About() {
  return (
    <div className='main-container'>
      <div className='about-container'>
        <h1>About me</h1>
        <div className='infopic-container'>
          {/* <div className='photo'>
            <img src={photo} alt="It's me" />
          </div> */}
          <div className='info'>
            <p>
              Hi! My name is Mike Alessi and I'm a former tech Salesperson
              turned Full-stack Developer and a recent graduate of Fullstack
              Academy. I love building things, solving problems, and learning
              about new technologies. After working within the business side of
              tech, I wanted to move on from selling products to building them!
            </p>
          </div>
        </div>
        <div className='technologies-container'>
          <h3>Here's some of the technology I've been working with lately: </h3>
          <div className='technologies'>
            <div className='technology'>
              <img src={jslogo} alt='Javascript' />
              <p>JavaScript</p>
            </div>
            <div className='technology'>
              <img src={htmlLogo} alt='HTML' />
              <p>HTML</p>
            </div>
            <div className='technology'>
              <img src={cssLogo} alt='CSS' />
              <p>CSS</p>
            </div>{" "}
            <div className='technology'>
              <img src={reactLogo} alt='React' />
              <p>React.js</p>
            </div>
            <div className='technology'>
              <img src={reduxLogo} alt='Redux' />
              <p>Redux.js</p>
            </div>
            <div className='technology'>
              <img src={nodeLogo} alt='Node' />
              <p>Node.js</p>
            </div>
            <div className='technology'>
              <img src={firebaseLogo} alt='Firebase' />
              <p>Firebase</p>
            </div>
            <div className='technology'>
              <img src={postgresLogo} alt='PostgreSQL' />
              <p>PostgresSQL</p>
            </div>
            <div className='technology'>
              <img src={gitLogo} alt='Git' />
              <p>Git</p>
            </div>
            <div className='technology'>
              <img src={muiLogo} alt='Material UI' />
              <p>Material UI</p>
            </div>
          </div>
        </div>
        <div>
          <div className='learning-more'>
            <h3>Interested in learning a bit more about me?</h3>
            <div className='learn-more-links-container'>
              <a href={resume} target='blank' className='learn-more-link'>
                <b>View Resume</b>
              </a>
              <a
                href='https://github.com/Malessi5'
                target='blank'
                className='learn-more-link'
              >
                <img src={githubLongLogo} alt='github' />
              </a>
              <a
                href='https://www.linkedin.com/in/mpalessi/'
                target='blank'
                className='learn-more-link'
              >
                <img src={linkedInLogo} alt='linkedin' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
