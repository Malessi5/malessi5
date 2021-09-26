import React from "react";
import {Link} from "react-router-dom";

import "./Projects.css";

export default function Projects() {
  return (
    <div className='project-container'>
      <h1>My Projects</h1>
      <div className='projects'>
        <div className='project'>
          <div className='proj-pic-container'>
            <img
              className='project-pic'
              src='./pics/pokewar.jpeg'
              alt='PokeWar'
            />
          </div>
          <div className='proj-info'>
            <h2>PokeWar</h2>
            <p>
              Two player online turn-based Pokemon game. Features include: User
              account creation and profile management, Google or Github
              authentication, real-time in-game chat, global leaderboard.{" "}
            </p>

            <p>
              <b>Built with: </b>React, Redux, Firebase, Material UI, and
              PokeAPI.
            </p>
            <div className='link-buttons'>
              <a
                href='https://poke-war-4483c.web.app/'
                style={{textDecoration: "none"}}
                className='live-link'
                target='blank'
              >
                Live Site
              </a>
              <a
                href='https://github.com/bell-peppers/PokeWar'
                className='git-link'
                target='blank'
              >
                <img src='pics/githublogo.png' alt='github link' />
              </a>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='proj-pic-container'>
            <img
              className='project-pic'
              src='https://camo.githubusercontent.com/49bc0b0957097b32721516777c1b72472f5e89f5739c7151efa2b4b8a2a5cc4d/68747470733a2f2f63646e2e6c6f6f6d2e636f6d2f73657373696f6e732f7468756d626e61696c732f30393661343066343136323734346364386461353538373138613463353738342d776974682d706c61792e676966'
              alt='Rays Kitchen'
            />
          </div>
          <div className='proj-info'>
            <h2>Ray's Kitchen</h2>
            <p>
              Fully functioning mock e-commerce website. Features include: user
              authentication, working shopping cart,
            </p>

            <p>
              <b>Built with: </b>PostgreSQL, Express, React/Redux, Node.js.
            </p>
            <div className='link-buttons'>
              <a
                href='https://graceshopper-fullstack.herokuapp.com/'
                style={{textDecoration: "none"}}
                className='live-link'
                target='blank'
              >
                Live Site
              </a>
              <a
                href='https://github.com/Brownie-Batter/graceshopper-project'
                className='git-link'
                target='blank'
              >
                <img src='pics/githublogo.png' alt='github link' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
