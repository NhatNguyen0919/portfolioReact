import React from 'react';
import "./index.css";
import Home from './route/Home';
import About from './route/About';
import Contact from './route/Contact';
import Project from './route/Project';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
