import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/img/menu.png';
import logo from '../../assets/img/logo.png';
import search_icon from '../../assets/img/search.png';
import upload_icon from '../../assets/img/upload.png';
import more_icon from '../../assets/img/more.png';
import notification_icon from '../../assets/img/notification.png';
import profile_icon from '../../assets/img/rizz.jpeg'; 

export const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu_icon' src={menu_icon} alt="Menu Icon" />
        <img className='logo' src={logo} alt="Logo" />
      </div>

      <div className='nav-middle flex-div'>
        <input type="text" placeholder='Search' className='search-bar' />
        <img className='search_icon' src={search_icon} alt="Search Icon" />
      </div>

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt="Upload Icon" />
        <img src={more_icon} alt="More Icon" />
        <img src={notification_icon} alt="Notification Icon" />
        <img src={profile_icon} className='user-icon' alt="Profile Icon" /> 
      </div>
    </nav>
  );
};
