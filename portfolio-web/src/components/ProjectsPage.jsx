import React from 'react'

const ProjectsPage = () => {
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
                <p>Use mapping function</p>
                <div className="project-wrapper">
                    <p>Determined</p>
                </div>
{/* could also create the list as a component */}
    </div>
    </div>
    </div>
  )
};

export default ProjectsPage;
