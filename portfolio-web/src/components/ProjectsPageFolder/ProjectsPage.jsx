import React , {useState} from 'react'
import './Projects.scss';

const projects = [{
  name: 'Recipe Manager'
},
{
  name: 'Maze Game'
},
{
  name: 'This website'
}]


const ProjectsPage = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = ()=>{
    setShowDetail(true);
  };
  return (
    <div>
      <div className='header-container'>
            <div className='header-wrapper'>
                <img src="/ProjectHeader.png" alt="Projects" />
            </div>
            {/* could create header-container as a component */}
    </div>

    <div className='projects-list-container'
    style={{transform: showDetail ? 'translateX(calc(-30vw))':'translateX(0)'}} >
              <ProjectsList showDetail={showDetail} handleClick={handleClick}/>
                
                
    </div>
    
    </div>
  )
};

//Using a mapping function to display each project and give them the same functions
function ProjectsList({showDetail, handleClick}) {
  return (
    <div className="projects-body-wrapper">
      {projects.map((project) => (
        <div className="project-wrapper" onClick={handleClick}>
          {project.name}
        </div>
      ))}
    </div>
  );
}

export default ProjectsPage;
