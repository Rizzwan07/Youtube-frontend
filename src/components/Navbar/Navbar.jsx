import React from 'react';
import './Navbar.css';
import { Menu, Search, Plus, Bell, Mic, Home, Music, User } from 'lucide-react';
import logo from '../../assets/img/logo.png';
import profile_icon from '../../assets/img/rizz.jpeg';

export const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        {/* Hamburger menu icon */}
        <Menu className="menu-icon" size={28} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
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
        {/* Example music and home icons */}
        <Home size={22} className='nav-icon' title="Home" />
        <Music size={22} className='nav-icon' title="Music" />
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
