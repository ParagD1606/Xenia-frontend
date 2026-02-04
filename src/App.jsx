import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Prism from './utils/Prism';
import Landing from './pages/Landing';

const App = () => {
  return (
    <div className="dark min-h-screen bg-neutral-950"> 
      

      {/* Routing Logic */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Add your dashboard route here when ready */}
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;