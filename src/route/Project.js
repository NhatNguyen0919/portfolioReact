import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HerroImg2 from '../components/HerroImg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HerroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work/>
      <Footer />
    </div>
  )
}

export default Project;