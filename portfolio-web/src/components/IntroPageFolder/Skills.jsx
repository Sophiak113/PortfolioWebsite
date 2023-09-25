import React from 'react';
import {useState, useRef, useEffect} from 'react';
// rating is out of 5
//Expertise goes Novice/beginner, Intermediate, Advanced, Expert/Master
const skills = [{
    id: '0',
    name: 'Javascript',
    src:'/Logos/JavascriptLogo.png',
    alt: 'Javascript',
    rating: 60,
    link: 'https://www.javascript.com/'
},
{
    id: '1',
    name: 'HTML',
    src:'/Logos/HTMLLogo.png',
    alt: 'HTML',
    rating: 60,
    link: 'https://html.spec.whatwg.org/'
},
{
  id: '2',
  name: 'CSS',
  src:'/Logos/CSSLogo.png',
  alt: 'CSS',
  rating: 80,
  link: 'https://www.w3.org/Style/CSS/current-work'
},
{
  id: '3',
  name: 'Sass',
  src:'/Logos/SassLogo.png',
  alt: 'Syntactically Awesome Style Sheets',
  rating: 40,
  link: 'https://sass-lang.com/'
},
{
  id: '4',
  name: 'Python',
  src:'/Logos/PythonLogo.png',
  alt: 'Python',
  rating: 50,
  link: 'https://www.python.org/'
},
{
  id: '5',
  name: 'Pygame',
  src:'/Logos/PygameLogo.png',
  alt: 'Pygame',
  rating: 30,
  link: 'https://www.pygame.org/news'
},
{
  id: '6',
  name: 'Node JS',
  src:'/Logos/NodeLogo.png',
  alt: 'Node',
  rating: 30,
  link: 'https://nodejs.org/'
},
{
  id: '7',
  name: 'Express JS',
  src:'/Logos/ExpressLogo.png',
  alt: 'Express JS',
  rating: 20,
  link: 'https://expressjs.com/'
},
{
  id: '8',
  name: 'React JS',
  src:'/Logos/ReactLogo.png',
  alt: 'React JS',
  rating: 60,
  link: 'https://reactjs.org/'
},


]

const Skills = (props) => {
  const [expandedSkills, setExpandedSkills] = useState([]);


  const handleClick = (skillId) => {
    // Check if the skillId is already in the expandedSkills array
    if (expandedSkills.includes(skillId)) {
      // If it's already expanded, remove it from the array
      setExpandedSkills(expandedSkills.filter((id) => id !== skillId));
    } else {
      // If it's not expanded, add it to the array
      setExpandedSkills([...expandedSkills, skillId]);
    }
  };

  return (
    <div className='skills-icon-container'>
      {skills.map((skill) => (
        <div
          className={`icon-container ${expandedSkills.includes(skill.id) ? 'selectedSkill' : ''}`}
          onClick={() => handleClick(skill.id)}  //Need to use a function callback else will cause an infinte loop

          key={skill.id}
        >
          <div className={`skill-outline ${expandedSkills.includes(skill.id) ? 'expanded' : ''}`}>
            <img src={skill.src} alt={skill.alt} />
            {expandedSkills.includes(skill.id) && <ExpandedSkill skill={skill} />}
          </div>
        </div>
      ))}
    </div>
  );
};

function ExpandedSkill({skill}){
  if (!skill) {
    // Handle the case when no project is selected
    return null;
  }
  return(
      <div className="skill-percentage-container">
        <div className="skill-percentage"
        style={{width:`${skill.rating}%`}}>
          <div className="skill-info">
          <div className="icon-labels-container">
              <p>{skill.name}</p>
              <p>{skill.rating}%</p>

            </div>

          </div>
        </div>

      </div>


  );
}

export default Skills
