import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './compoments/NavMenu';
import Home from './pages/Home';
import Competence from './pages/Competence';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './compoments/Footer';
import Symfony from './pages/Symfony';
import Stages from './pages/Stages';
import JeuEchec from './pages/JeuEchec';
import ReactJs from './pages/ReactJs';

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
          <Route path="/Symfony">
            <Symfony />
          </Route>
          <Route path="/JeuEchec">
            <JeuEchec />
          </Route>
          <Route path="/ReactJs">
            <ReactJs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
