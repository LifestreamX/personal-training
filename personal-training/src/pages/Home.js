import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import {
  homeObjOne,
  // homeObjTwo,
  homeObjThree,
  homeObjFour,
} from '../components/infosection/Data';
import InfoSection from '../components/infosection/InfoSection';
import Navbar from '../components/navbar/Navbar';
import Services from '../components/services/Services';
import Sidebar from '../components/sidebar/Sidebar';
import SignupSection from '../components/infosection/SignupSection';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <Services />
      <InfoSection {...homeObjThree} />
      <SignupSection {...homeObjFour} />

      <Footer />
    </>
  );
};

export default Home;
