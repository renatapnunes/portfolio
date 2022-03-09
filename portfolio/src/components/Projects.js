import React from 'react';

import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';

function Projects() {
  return (
    <section className="section-projects">
      <h1 className="projects-title">PROJETOS</h1>
      <div className="container-projects">
        <section className="container-main-projects">
          <ProjectCard />
        </section>
        <section className="container-projects">
          <ProjectList />
        </section>
      </div>
    </section>
  );
}

export default Projects;
