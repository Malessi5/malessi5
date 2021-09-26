import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className='project-container'>
      <h1>My Projects</h1>
      <div className='projects'>
        <div className='project'>
          <div>
            <img src='./pics/pokewar.jpeg' alt='PokeWar' />
          </div>
          <div>
            <h2>Project title</h2>
            <p>Project info</p>
            <div className='link-buttons'>
              <button>Live Site</button>
              <button>Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
