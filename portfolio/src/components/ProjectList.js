import React from 'react';

import projects from '../helpers/projects';

function ProjectList() {
  return (
    <>
      {
        projects.map(({ name, stacks, github }, index) => (
          <div className="project-item" key={ index }>
            <h4 className="project-title">{ name }</h4>
            <p className="stacks">{ stacks }</p>
            <a className="link" href={ github } target="blank">GitHub</a>
          </div>
        ))
      }
    </>
  );
}

export default ProjectList;
