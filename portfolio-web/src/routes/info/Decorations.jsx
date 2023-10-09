import React from 'react';
import FixedImagesBot from '../../components/FixedImagesBot';
import FixedImagesTop from '../../components/FixedImagesTop';
import { Outlet } from 'react-router-dom';


const Decorations = () => {
  return (
              <div className="decorative-container">

                  <FixedImagesTop/>
                    <div className="outlet-container">
                    {/* <ExpandingNav /> */}
                        <Outlet></Outlet>
                        
                    </div>
                  <FixedImagesBot></FixedImagesBot>
  
              </div>
      
  )
}

const ExpandingNav = () => {
  return (
    <div className='expanding-nav'>
      
    </div>
  )
}



export default Decorations
