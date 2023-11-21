import React, {useState,useEffect} from 'react';
import FixedImagesBot from '../../components/FixedImagesBot';
import FixedImagesTop from '../../components/FixedImagesTop';
import NavBar from '../../components/NavBar';
import { Outlet } from 'react-router-dom';
import HamburgerMenu from '../../components/HamburgerMenu';


const Decorations = () => {
  return (
              <div className="decorative-container">
                {/* <NavBar></NavBar> */}
                {/* Temporary navbar till expanded is created */}

                  <FixedImagesTop/>
                  <ExpandingNav />

                  {/* <HamburgerMenu></HamburgerMenu> */}
                    <div className="outlet-container">
                      

                        <Outlet></Outlet>
                        
                    </div>
                  <FixedImagesBot></FixedImagesBot>
  
              </div>
      
  )
}

const ExpandingNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='expanding-nav-container'>
      <div className="expanding-nav-tab" onClick={handleToggleMenu}>
        {/* Nav */}
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      {isMenuOpen && <DropDownNav onCloseMenuClick={handleCloseMenuClick} />}
    </div>
  );
}

const DropDownNav = ({ onCloseMenuClick }) => {
  return (
    <div className="drop-down-container-nav">
      <div className="close-menu-icon-container" onClick={onCloseMenuClick}>
        <div className="close-menu-line-1"></div>
        <div className="close-menu-line-2"></div>
      </div>
      <NavBar></NavBar>
    </div>
  );
}

export default Decorations
