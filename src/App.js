import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Experience from './components/Exprience/Experience'
import Certificates from './components/Certifications/Certifications'
import Focus from './components/FocusPage/Focus';

import { PortfolioProvider } from './context/context';

import { heroData, aboutData, projectsData, contactData, footerData, experienceData, certificationData, focusData } from './data/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [experience, setExperience] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [focus, setFocus] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setExperience([ ...experienceData ]);
    setCertificates([ ...certificationData ]);
    setFocus([...focusData]);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, experience, certificates, focus}}>
      <Router>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/certifications">
            <Certificates />
          </Route>
          <Route path="/focus">
            <Focus />
          </Route>
          <Route path="/">
            <Hero />
            <About />
          </Route>
        </Switch>
        <Contact />
        <Footer />
      </Router>
    </PortfolioProvider>
  );
}

export default App;
