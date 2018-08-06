import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import PostsIndex from "../posts/PostsIndex"

const Routes = () => (
  <Router>
    <div>
    <Route path="/about" exact strict component={About} />
    <Route path="/contact" exact strict component={Contact} />
    </div>
  </Router>

);



export default Routes
