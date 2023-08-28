import React from 'react'
import LinkList from './LinkList'

const ContactPage = () => {
const links = [{
    alt:'Github',
    src: 'GithubLogo.png',
    link: 'https://github.com/Sophiak113'
},
{
    alt:'LinkedIn',
    src: '/LinkedInLogo.png',
    link: 'https://www.linkedin.com/in/sophia-kinsey-2057871a2/'
}
]
  return (
    <div className='contact-container'>
      <div className='header-container'>
            <div className='header-wrapper'>
                <img src="/ContactMeHeader.png" alt="Contact Me" />
            </div>
        </div>
      <div className="contact-body-container">
        <div className="contact-form-container">
          <h2>Send me an email</h2>
          <form className='contact-form' action="">
            <input type="text" placeholder='Email' />
            <input type="text" name="" placeholder='Name' />
            <input type="text" placeholder='Subject'/>
            <input type="text" placeholder='Message'/>
            <button>Send</button>
          </form>
        </div>
        <div className="links-container">
          <h2>Links</h2>
          <LinkList links={links} />
        </div>
      </div>
      

    </div>
  )
}

export default ContactPage
