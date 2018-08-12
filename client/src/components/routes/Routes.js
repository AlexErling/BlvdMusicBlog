import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Team from "../pages/Team"
import PostIndex from "../posts/PostIndex"
import PostShow from "../posts/PostShow"
import Tags from "../posts/Tags"
import NavBar from '..//navigation/NavBar'
import Footer from '..//navigation/Footer'

const Routes = () => (
  <Router>
    <div className="App Site container">
      <div className="Site-content">
        <div className="App-header">
          <NavBar />
        </div>
        <div className="main">
         <Switch>
            <Route path="/about" exact strict component={About} />
            <Route path="/contact" exact strict component={Contact} />
            <Route path="/posts" exact strict component={PostIndex} />
            <Route path="/team" exact strict component={Team} />
            <Route path={"/post/:postId"} exact strict component={PostShow} />
            <Route path={"/tag/:tag"}  exact strict component={Tags} />
          </Switch>
        </div>

    </div>
          <Footer />
    </div>
  </Router>

);



export default Routes
