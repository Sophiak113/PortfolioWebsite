import React from 'react'

const ContactPage = () => {
const links = [{
    id: '1',
    alt:'Github',
    src: 'https://cdn.pixabay.com/photo/2023/05/02/21/08/river-7966163_1280.png',
    link: 'https://github.com/Sophiak113'
},
{
    id: '2',
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
      <div className="card-outline">
        <img src="" alt="LinkedIn" />
        </div>
        <div className="card-outline">
        <img src="" alt="LinkedIn" />
        </div>
    </div>
  )
}

export default ContactPage
