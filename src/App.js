import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './compoments/NavMenu';
import Home from './pages/Home';
import Competence from './pages/Competence';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
