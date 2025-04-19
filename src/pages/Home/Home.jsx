import React, { useContext } from 'react'
import './Home.css'
import Feed from '../../components/Feed/Feed'
import CategoryNav from '../../components/CategoryNav/CategoryNav'

const Home = ({ showSidebar }) => {
  // Sidebar open state could be passed as prop, but for now we'll assume it's closed
  const sidebarOpen = false;
  
  return (
    <div className="home-page">
      <div className={`content-area ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <CategoryNav />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
