import React from "react";
import projectData from "../projectData";
import SingleProject from "./SingleProject";

import "./Projects.css";

export default function Projects() {
  const data = projectData();
  return (
    <div className='project-container'>
      <h1>My Projects</h1>
      <div className='projects'>
        {data.map((proj) => {
          return (
            <SingleProject
              key={proj.id}
              name={proj.name}
              description={proj.description}
              tech={proj.techStack}
              imgs={proj.imageUrls}
              liveUrl={proj.liveUrl}
              gitUrl={proj.gitUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
