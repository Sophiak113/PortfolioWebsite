import React from 'react';
import FixedImagesBot from '../../components/FixedImagesBot';
import FixedImagesTop from '../../components/FixedImagesTop';
import NavBar from '../../components/NavBar';
import { Outlet } from 'react-router-dom';


const Decorations = () => {
  return (
              <div className="decorative-container">
                <NavBar></NavBar>
                {/* Temporary navbar till expanded is created */}

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
    // <div className='expanding-nav'>
      
    // </div>
  )
}



export default Decorations
