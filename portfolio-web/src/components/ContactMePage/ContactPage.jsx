import React from 'react'
import LinkList from './LinkList'

const ContactPage = () => {
const links = [{
    alt:'Github',
    src: 'https://cdn.pixabay.com/photo/2023/05/02/21/08/river-7966163_1280.png',
    link: 'https://github.com/Sophiak113'
},
{
    alt:'LinkedIn',
    src: 'https://cdn.pixabay.com/photo/2023/05/02/21/08/river-7966163_1280.png',
    link: 'https://www.linkedin.com/in/sophia-kinsey-2057871a2/'
}
]
  return (
    <div>
      <h2>Send me an email</h2>
      <form action="">
        <input type="text" placeholder='Email' />
        <input type="text" name="" placeholder='Name' />
        <input type="text" placeholder='Subject'/>
        <input type="text" placeholder='Message'/>
        <button>Send</button>
      </form>
      <h2>Links</h2>
      <LinkList links={links} />
      

    </div>
  )
}

export default ContactPage
