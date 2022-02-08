import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import { homeObjOne } from '../components/infosection/Data';
import InfoSection from '../components/infosection/InfoSection';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

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
    </>
  );
};

export default Home;
