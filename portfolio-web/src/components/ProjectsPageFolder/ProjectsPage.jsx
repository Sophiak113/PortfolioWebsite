import React from 'react'
import ProjectsList from './ProjectsList';

const ProjectsPage = () => {
  const projects = [{
    name: 'Recipe Manager'
  },
  {
    name: 'Maze Game'
  },
  {
    name: 'This website'
  }]
  return (
    <div>
      <div className='header-container'>
            <div className='header-wrapper'>
                <img src="/ProjectHeader.png" alt="Projects" />
            </div>
            {/* could create header-container as a component */}
    </div>

    <div className='projects-list-container'>
            <div className="projects-body-wrapper">
              <ProjectsList projects={projects}></ProjectsList>
                
                
{/* could also create the list as a component */}
    </div>
    </div>
    </div>
  )
};

export default ProjectsPage;
