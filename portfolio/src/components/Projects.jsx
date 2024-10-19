import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projects.json';

const Projects = () => {
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);
  return (
    <>
    <div className="projects-header">
    <div className="glitch" data-text="Projects" style={{ fontSize: '30px' }}>Projects</div>
      </div>
    
    <div>
      {sortedProjects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>

    </>
  );
};

export default Projects;