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
    {showDetail && <ProjectDetail/>}
    </div>
  )
};

//Using a mapping function to display each project and give them the same functions
function ProjectsList({showDetail, handleClick}) {
  return (
    <div className="projects-body-wrapper">
      {projects.map((project,index) => (
        <div className="project-wrapper" onClick={handleClick} key={index}>
          {project.name}
        </div>
      ))}
    </div>
  );
}

function ProjectDetail(){
  return(
    <div className="detail-container">
      <div className="project-wrapper-extension"></div>
      
      {/* Paragraphs describing the the project */}
      <div className="paragraphs-wrapper">
        <h2>OVERVIEW</h2>
        <p>{projects.overview}</p>
        <h2>MY ROLE</h2>
        <p>{projects.myRole}</p>
        <h2>TOOLS USED</h2>
        <p>{projects.tools}</p>
      </div>

      {/* Video or img of the project */}
      <div className="detail-image-wrapper">
        <img src="" alt="" />
      </div>

      {/* Github Link in the form of a github icon */}
      <div className="detail-link-wrapper">
        <h2>LINKS</h2>
        <div className="card-outline">
        <a href={projects.link}>
                  <img src='/GithubLogo.png' alt='Link to Github Repo' />
              </a>
        </div>
      </div>

    </div>

  );
}

export default ProjectsPage;
