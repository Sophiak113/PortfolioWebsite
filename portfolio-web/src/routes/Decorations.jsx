import React from 'react';
import FixedImagesBot from '../components/FixedImagesBot';
import FixedImagesTop from '../components/FixedImagesTop';
import { Outlet } from 'react-router-dom';


const Decorations = () => {
  return (
              <div className="decorative-container">
                  <FixedImagesTop/>
                    <div className="outlet-container">
                        <Outlet></Outlet>
                    </div>
                  <FixedImagesBot></FixedImagesBot>
              </div>
      
  )
}

export default Decorations
