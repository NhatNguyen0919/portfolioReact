import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HerroImg2 from '../components/HerroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HerroImg2 heading="CONTACT." text="Let's have a chat" />
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact;