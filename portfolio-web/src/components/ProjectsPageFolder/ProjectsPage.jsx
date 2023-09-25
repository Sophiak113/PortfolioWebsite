import React , {useState, useEffect, useRef} from 'react'
import GlitchText from '../GlitchText';
import './Projects.scss';

// Array containing project objects - info about projects I have done
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
},
{
  id: '3',
  name: 'APIs',
  overview: 'Demonstrating my ability to use different types of APIs',
  myRole: 'From design to coding I did everything on this website!',
  tools: 'React (jsx), Javascript, css, sass, node, express js, nodemailer',
  link: '',
  src: '',
  alt: ''
}
]


const ProjectsPage = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const projectsListRef = useRef(null); // Create a reference

  const handleClick = (projectId) => {
    setSelectedProjectId(projectId);
    setShowDetail(true);
  };

  useEffect(() => {
    // Function to check viewport width and set showDetail
    const checkViewportAndShowDetail = () => {
      //Get the width of the window
      const viewportWidth = window.innerWidth;
      // Access the DOM element using the ref
      const projectsListElement = projectsListRef.current;
      
      // Check if viewport width is greater than 1440 and showDetail is true
      if (viewportWidth > 1440 && showDetail) {
        projectsListElement.style.gridColumm = '1'
        console.log(projectsListElement.style.gridColumm)

      }
    };

    // Add an event listener to listen for window resize
    window.addEventListener('resize', checkViewportAndShowDetail);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkViewportAndShowDetail);
    };
  }, [showDetail]); // This effect runs whenever showDetail changes

  return (
    <div className='project-page-container'>
      <div className='header-container'>
            <div className='header-wrapper'>
                {/* <img src="/ProjectHeader.png" alt="Projects" /> */}
                <GlitchText tag='h3' text='PROJECTS'></GlitchText>

            </div>
            {/* could create header-container as a component */}
    </div>

    <div className="project-and-detail-container">
      <div className='projects-list-container'   ref={projectsListRef} >
      {/* The above needs a ref so its style can be changed in the UseEffect */}

                <ProjectsList
            showDetail={showDetail}
            selectedProjectId={selectedProjectId}
            handleClick={handleClick}
          />
      
      
      </div>

      {/* Conditonal rendering, if selectedProject is thruthy renders the detail container with the same id as the project wrapper*/}
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
        {/* <h2>OVERVIEW</h2> */}
        <GlitchText tag='h2' text='OVERVIEW'></GlitchText>
        <p>{project.overview}</p>
        {/* <h2>MY ROLE</h2> */}
        <GlitchText tag='h2' text='MY ROLE'></GlitchText>

        <p>{project.myRole}</p>
        {/* <h2>TOOLS USED</h2> */}
        <GlitchText tag='h2' text='TOOLS USED'></GlitchText>

        <p>{project.tools}</p>
      </div>

      <div className="detail-img-and-link-container">
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

    </div>

  );
}

export default ProjectsPage;
