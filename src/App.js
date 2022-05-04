import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './compoments/NavMenu';
import Home from './pages/Home';
import Competence from './pages/Competence';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './compoments/Footer';
import ProjetHopital from './pages/ProjetHopital';
import Stages from './pages/Stages';
import JeuEchec from './pages/JeuEchec';
import ReactJs from './pages/ReactJs';
import Skill from './pages/Skill';
import Veille from './pages/Veille';
import ImageFullScreen from './compoments/ImageFullScreen';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/Competences">
            <Competence />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contacts">
            <Contact />
          </Route>
          <Route path="/Stages">
            <Stages />
          </Route>
          <Route path="/ProjetHopital">
            <ProjetHopital />
          </Route>
          <Route path="/JeuEchec">
            <JeuEchec />
          </Route>
          <Route path="/Veille">
            <Veille />
          </Route>
          <Route path="/ReactJs">
            <ReactJs />
          </Route>
          <Route path="/image" component={ImageFullScreen} />
          <Route path="/Skill" component={Skill} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
