import React from 'react';
import FixedImagesBot from '../../components/FixedImagesBot';
import FixedImagesTop from '../../components/FixedImagesTop';
import { Outlet } from 'react-router-dom';


const Decorations = () => {
  return (
              <div className="decorative-container">
                <ExpandingNav />

                  <FixedImagesTop/>
                    <div className="outlet-container">
                        <Outlet></Outlet>
                        
                    </div>
                  <FixedImagesBot></FixedImagesBot>
              </div>
      
  )
}

const ExpandingNav = () => {
  return (
    <img src="FuschiaHoop.png" alt="" />
    // <div className='expanding-nav-tab'>
      
    // </div>
  )
}



export default Decorations
