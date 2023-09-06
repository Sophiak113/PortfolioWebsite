import React from 'react'
// rating is out of 5
//Expertise goes Novice/beginner, Intermediate, Advanced, Expert/Master
const skills = [{
    id: '0',
    name: 'Javascript',
    src:'/JavascriptLogo.png',
    alt: 'Javascript',
    rating: '2',
    link: 'https://www.javascript.com/'
},
{
    id: '1',
    name: 'HTML',
    src:'/HTMLLogo.png',
    alt: 'HTML',
    rating: '3',
    link: 'https://html.spec.whatwg.org/'
},
{
  id: '2',
  name: 'CSS',
  src:'CSSLogo.png',
  alt: 'CSS',
  rating: '3',
  link: 'https://www.w3.org/Style/CSS/current-work'
},
{
  id: '3',
  name: 'Sass',
  src:'/SassLogo.png',
  alt: 'Syntactically Awesome Style Sheets',
  rating: '1',
  link: 'https://sass-lang.com/'
},
{
  id: '4',
  name: 'Python',
  src:'/PythonLogo.png',
  alt: 'Python',
  rating: '2',
  link: 'https://www.python.org/'
},
{
  id: '5',
  name: 'Pygame',
  src:'/PygameLogo.png',
  alt: 'Pygame',
  rating: '2',
  link: 'https://www.pygame.org/news'
},
{
  id: '6',
  name: 'Node JS',
  src:'/NodeLogo.png',
  alt: 'Node',
  rating: '1',
  link: 'https://nodejs.org/'
},
{
  id: '7',
  name: 'Express JS',
  src:'/ExpressLogo.png',
  alt: 'Express JS',
  rating: '1',
  link: 'https://expressjs.com/'
},
{
  id: '8',
  name: 'React JS',
  src:'/ReactLogo.png',
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
            <div className="card-outline">
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
