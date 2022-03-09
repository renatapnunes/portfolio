import React from 'react';

import mainProjects from '../helpers/mainProjects';
import starwars from '../images/starwars.png';
import trivia from '../images/trivia.png';
import task from '../images/task.png';

const images = [starwars, trivia, task];

function ProjectCard() {
  return (
    <>
      {
        mainProjects.map(({ name, describe, stacks, github, vercel }, index) => (
          <div className="project-card" key={ index }>
            <img className="img-project" src={ images[index] } alt="project" />
            <h4 className="project-title">{ name }</h4>
            <p className="stacks">{ stacks }</p>
            <p>{ describe }</p>
            { vercel && <a className="link" href={ vercel } target="blank">Aplicação</a> }
            <a className="link" href={ github } target="blank">GitHub</a>
          </div>
        ))
      }
    </>
  );
}

export default ProjectCard;
