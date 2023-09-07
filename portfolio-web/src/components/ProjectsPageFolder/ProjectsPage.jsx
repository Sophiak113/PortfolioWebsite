import React , {useState} from 'react'
import './Projects.scss';

const projects = [{
  id: '0',
  name: 'Recipe Manager',
  overview: 'Recipe Manager allows you to store and write to add your recipes including their instructions and ingredients to a database then save and access them again all through a GUI',
  myRole: 'In this project I worked as part of a team, I wrote the beginnings of the recipe class and the GUI',
  tools: 'Python, Tkinter, YAML',
  link: '',
  src: '',
  alt: 'Recipe Manager in action'

},
{
  id: '1',
  name: 'Maze Game',
  overview: 'Maze game is a simple game where you move throught the maze to reach the exit ensuring not to touch the walls',
  myRole: 'In this project I worked as part of a team and my designated role was to do the entirety of the maze game from design to mechanics',
  tools: 'Python, Pygame',
  link: 'https://github.com/lachlanin4/CapstoneProject3-maze',
  src: '/MazeGameSnippet.png',
  alt: 'Maze Game in action'
},
{
  id: '2',
  name: 'This website',
  overview: 'This website is to display my abilities as a software engineer',
  myRole: 'From design to coding I did everything on this website!',
  tools: 'React (jsx), Javascript, css, sass, node, express js, nodemailer',
  link: '',
  src: '',
  alt: ''
}]


const ProjectsPage = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleClick = (projectId) => {
    setSelectedProjectId(projectId);
    setShowDetail(true);
  };
  return (
    <div className='project-page-container'>
      <div className='header-container'>
            <div className='header-wrapper'>
                <img src="/ProjectHeader.png" alt="Projects" />
            </div>
            {/* could create header-container as a component */}
    </div>

    <div className="project-and-detail-container">
      <div className='projects-list-container'
      style={{transform: showDetail ? 'gridColumn(1)':'gridColumn(2)'}} >
                <ProjectsList
            showDetail={showDetail}
            selectedProjectId={selectedProjectId}
            handleClick={handleClick}
          />
      
      
      </div>
      {selectedProjectId && <ProjectDetail project={projects.find((p) => p.id === selectedProjectId)} />}
    </div>

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
        <img className='detail-img' src={project.src} alt={project.alt} />
      </div>

      {/* Github Link in the form of a github icon */}
      <div className="detail-link-wrapper">
        <h2>LINKS</h2>
        <div className="card-outline">
        <a href={project.link} target="_blank">
                  <img src='/Logos/GithubLogo.png' alt='Link to Github Repo' />
              </a>
        </div>
      </div>

    </div>

  );
}

export default ProjectsPage;
