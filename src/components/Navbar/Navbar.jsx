import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Navbar() {

  const[isScrolled,setIsScrolled]=useState(false);

  window.onscroll=()=>
  {
    setIsScrolled(window.pageYOffset=== 0 ?false : true);
    
    return () => (window.onscroll= null); 
  };
  return (
    <div className={isScrolled ? "navbarCssScrolled" : "navbarCss"}>
    
         <div className='container'>
        
            <div className='left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo" />

            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>

            
            
            
            </div>

                <div className='right'>
                  <SearchIcon className="icon"/>
                  <span>Kid</span>
                  <NotificationsIcon className="icon"/>
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="userImage"/>

                  <div className="profile">
                  <KeyboardArrowDownIcon className="icon"/>

                    <div className='options'>
                      <span>Settings</span>
                      <span>Logout</span>
                    
                    </div>

                  
                  </div>


                </div>


        
        
        
        </div>
    
    
    
    </div>
  )
}
