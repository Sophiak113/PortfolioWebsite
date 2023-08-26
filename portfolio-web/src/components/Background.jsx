import React from 'react'

const Background = (props) => {
  return (
    <div className='background wrapper'>
      <video  className="background" width="100%" height="100%" loop autoPlay muted>
  <source src="/HomeBackground.mp4" type="video/mp4" />
 </video>
 


    </div>
  )
}

export default Background