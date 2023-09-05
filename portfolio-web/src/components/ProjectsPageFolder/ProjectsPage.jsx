import React , {useState} from 'react'
import './Projects.scss';

const projects = [{
  id: '0',
  name: 'Recipe Manager',
  overview: 'Recipe Manager allows you to store and write to add your recipes including their instructions and ingredients to a database then save and access them again all through a GUI',
  myRole: 'In this project I worked as part of a team, I wrote the beginnings of the recipe class and the GUI',
  tools: 'Python, Tkinter, YAML',
  src: '',
  alt: 'Recipe Manager in action'

},
{
  name: 'Maze Game'
},
{
  name: 'This website'
}]


const ProjectsPage = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleClick = (projectId) => {
    setSelectedProjectId(projectId);
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
              <ProjectsList
          showDetail={showDetail}
          selectedProjectId={selectedProjectId}
          handleClick={handleClick}
        />
                
             
    </div>
    {selectedProjectId && <ProjectDetail project={projects.find((p) => p.id === selectedProjectId)} />}

    </div>
  )
};

//Using a mapping function to display each project and give them the same functions
function ProjectsList({showDetail, handleClick, selectedProjectId}) {
  return (
    <div className="projects-body-wrapper">
      {projects.map((project) => (
        <div
        className={`project-wrapper ${project.id === selectedProjectId ? 'selected' : ''}`}
        onClick={() => handleClick(project.id)}
        key={project.id}
        >
          {project.name}
        </div>
      ))}
    </div>
  );
}
function ProjectDetail({ project }) {

  if (!project) {
    // Handle the case when no project is selected
    return null;
  }

  return(
    <div className="detail-container">
      <div className="project-wrapper-extension"></div>
      
      {/* Paragraphs describing the the project */}
      <div className="paragraphs-wrapper">
        <h2>OVERVIEW</h2>
        <p>{project.overview}</p>
        <h2>MY ROLE</h2>
        <p>{project.myRole}</p>
        <h2>TOOLS USED</h2>
        <p>{project.tools}</p>
      </div>

      {/* Video or img of the project */}
      <div className="detail-image-wrapper">
        <img src="" alt="" />
      </div>

      {/* Github Link in the form of a github icon */}
      <div className="detail-link-wrapper">
        <h2>LINKS</h2>
        <div className="card-outline">
        <a href={project.link}>
                  <img src='/GithubLogo.png' alt='Link to Github Repo' />
              </a>
        </div>
      </div>

    </div>

  );
}

export default ProjectsPage;
