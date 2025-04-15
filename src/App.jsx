import React from 'react';
import { Navbar } from './components/navbar/navbar'; 
import { Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>  
        <Route path = '/' element={<Home/>} />
        <Route path = '/video/:categoryId: videoId' element={<Video/>} />
      </Routes>
    </div> 
  );
};

export default App;