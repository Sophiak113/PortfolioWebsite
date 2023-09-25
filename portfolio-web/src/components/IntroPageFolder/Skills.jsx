import React from 'react'
// rating is out of 5
//Expertise goes Novice/beginner, Intermediate, Advanced, Expert/Master
const skills = [{
    id: '0',
    name: 'Javascript',
    src:'/Logos/JavascriptLogo.png',
    alt: 'Javascript',
    rating: '2',
    link: 'https://www.javascript.com/'
},
{
    id: '1',
    name: 'HTML',
    src:'/Logos/HTMLLogo.png',
    alt: 'HTML',
    rating: '3',
    link: 'https://html.spec.whatwg.org/'
},
{
  id: '2',
  name: 'CSS',
  src:'/Logos/CSSLogo.png',
  alt: 'CSS',
  rating: '3',
  link: 'https://www.w3.org/Style/CSS/current-work'
},
{
  id: '3',
  name: 'Sass',
  src:'/Logos/SassLogo.png',
  alt: 'Syntactically Awesome Style Sheets',
  rating: '1',
  link: 'https://sass-lang.com/'
},
{
  id: '4',
  name: 'Python',
  src:'/Logos/PythonLogo.png',
  alt: 'Python',
  rating: '2',
  link: 'https://www.python.org/'
},
{
  id: '5',
  name: 'Pygame',
  src:'/Logos/PygameLogo.png',
  alt: 'Pygame',
  rating: '1',
  link: 'https://www.pygame.org/news'
},
{
  id: '6',
  name: 'Node JS',
  src:'/Logos/NodeLogo.png',
  alt: 'Node',
  rating: '1',
  link: 'https://nodejs.org/'
},
{
  id: '7',
  name: 'Express JS',
  src:'/Logos/ExpressLogo.png',
  alt: 'Express JS',
  rating: '1',
  link: 'https://expressjs.com/'
},
{
  id: '8',
  name: 'React JS',
  src:'/Logos/ReactLogo.png',
  alt: 'React JS',
  rating: '2',
  link: 'https://reactjs.org/'
},


]

const Skills = (props) => {
  return (
    <div className='skills-icon-container'>
        {skills.map((skill)=>(
          <div className="icon-container">
            <div className="icon-labels-container">
              <p>{skill.name}</p>
              {/* Displays my skill level in each skill based on my rating */}
              {(() => {
                if (skill.rating === '1') {
                  return <p>Beginner</p>;
                } else if (skill.rating === '2' || skill.rating === '3') {
                  return <p>Intermediate</p>;
                } else if (skill.rating === '4') {
                  return <p>Advanced</p>;
                } else if (skill.rating === '5') {
                  return <p>Expert</p>;
                } else {
                  // Handle other cases or provide a default value
                  return <h2>Unknown</h2>;
                }
              })()}
            </div>
            <div className="skill-outline">
              <a href={skill.link} target="_blank">
                <img src={skill.src} alt={skill.alt} />
                </a>
              
            </div>
          </div>
        ))}
      
    </div>
  )
}

export default Skills
