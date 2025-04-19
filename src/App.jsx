import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar'; 
import { Sidebar } from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom'; // Added Route import
import Home from './pages/Home/Home'; // Import Home component
import Video from './pages/Video/Video'; // Import Video component
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        <div className="content-container">
          <Sidebar isOpen={sidebarOpen} />
          <div className="main-content">
            <Routes>  
              <Route path="/" element={<Home showSidebar={false} />} />
              <Route path="/video/:categoryId/:videoId" element={<Video />} /> {/* Fixed path */}
            </Routes>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default App;