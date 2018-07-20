import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"

const Routes = () => (
  <Router>
    <div>
    <Route path="/" exact strict component={Home} />
    <Route path="/about" exact strict component={About} />
    <Route path="/contact" exact strict component={Contact} />
    </div>
  </Router>

);



export default Routes
