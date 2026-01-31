import React from 'react';
import Hero from '../components/Hero.jsx';
import Projects from '../components/Projects.jsx';
import AboutPreview from '../components/AboutPreview.jsx';
import CallToAction from '../components/CallToAction.jsx';

const Home = () => {
  return (
    <div className="bg-transparent">
      <Hero />
      <Projects />
      <AboutPreview />
      <CallToAction />
    </div>
  );
};

export default Home;