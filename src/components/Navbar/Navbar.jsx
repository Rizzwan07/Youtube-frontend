import React from 'react';
import './Navbar.css';
import { Search, Plus, Bell, Mic } from 'lucide-react';
import logo from '../../assets/img/logo.png';
import profile_icon from '../../assets/img/rizz.jpeg'; 

export const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <img className='logo' src={logo} alt="Logo" />
      </div>

      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'> 
          <input type="text" placeholder='Search' className='search-bar' />
          <div className='search-icon-container'>
            <Search className='search-icon' size={18} />

          </div>
        </div>
        <div className='mic-icon-container'>
          <Mic size={20} className='mic-icon' />
          
        </div>
      </div>

      <div className='nav-right flex-div'>
        <div className='create-button flex-div'>
          <Plus size={20} className='create-icon' />
          <span>Create</span>
        </div>
        <Bell size={22} className='nav-icon' />
        <img src={profile_icon} className='user-icon' alt="Profile Icon" /> 
      </div>
    </nav>
  );
};

export default Navbar;
