import React from "react";

export default function SingleProject(props) {
  const {name, description, tech, imgs, liveUrl, gitUrl} = props;
  return (
    <div className='project'>
      <div className='proj-pic-container'>
        <img className='project-pic' src={imgs[0]} alt={name} />
      </div>
      <div className='proj-info'>
        <div className='proj-info-box'>
          <h2>{name}</h2>
          <p>{description}</p>

          <p>
            <b>Built with: </b>
            {tech}
          </p>
        </div>

        <div className='link-buttons'>
          <a
            href={liveUrl}
            style={{textDecoration: "none"}}
            className='live-link'
            target='blank'
          >
            Live Site
          </a>
          <a href={gitUrl} className='git-link' target='blank'>
            <img src='pics/githublogo.png' alt='github link' />
          </a>
        </div>
      </div>
    </div>
  );
}
