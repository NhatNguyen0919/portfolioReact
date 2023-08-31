import React from 'react'

import HerroImg2 from '../components/HerroImg2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aboutme from '../components/Aboutme';

const About = () => {
  return (
    <div>
      <Navbar />
      <HerroImg2 heading="ABOUT." text="I'm a frinedly Web Developer" />
      <Aboutme/>
      <Footer />
    </div>
  )
}

export default About;
