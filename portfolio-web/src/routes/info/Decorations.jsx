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
  const [isClicked, setIsClicked] = useState(false);

  const handleClick =()=>{
    setIsClicked(true)

  }



  // useEffect(()=>{
  //   function handleClick(){
      
  //   }

  // },[]);
  return (
    <div className='expanding-nav-container'>
      <div className="expanding-nav-tab" onClick={()=>handleClick()}>
      {/* Nav */}
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      </div>
    {isClicked ? <DropDownNav/>: ''
    }
      
    </div>
  )
}

const DropDownNav=()=>{
  return(
    <div className="drop-down-container-nav">
      
      <NavBar/>

    </div>

  );

}

export default Decorations
