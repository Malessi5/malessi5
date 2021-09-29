import React, {useState} from "react";
import gitHubLogo from "../pics/githublogo.png";

export default function SingleProject(props) {
  const {name, description, tech, imgs, liveUrl, gitUrl} = props;
  const maxImgIndex = imgs.length - 1;
  let [imageIndex, setImageIndex] = useState(0);

  function imgClickHandle() {
    console.log(imageIndex, maxImgIndex);
    if (imageIndex === maxImgIndex) {
      setImageIndex(0);
    } else {
      let imgind = imageIndex + 1;
      setImageIndex(imgind);
    }
  }

  return (
    <div className='project'>
      <div className='proj-pic-container'>
        <img
          className='project-pic'
          onClick={imgClickHandle}
          src={imgs[imageIndex]}
          alt={name}
        />
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
            <img src={gitHubLogo} alt='github link' />
          </a>
        </div>
      </div>
    </div>
  );
}
