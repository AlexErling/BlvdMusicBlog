import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import About from "../pages/About"
import Contact from "../pages/Contact"
import Team from "../pages/Team"
import SongSubmission from "../pages/SongSubmission"
import PostIndex from "../posts/PostIndex"
import PostShow from "../posts/PostShow"
import Tags from "../posts/Tags"
import PageNotFound from "../pages/PageNotFound"
import NavBar from '..//navigation/NavBar'
import Footer from '..//navigation/Footer'
import SideBar from '..//navigation/SideBar'
import Search from '..//search/Search'
import {Grid, Divider} from 'semantic-ui-react'

const Routes = () => (
  <Router>
    <div className="App Site container">
      <div className="Site-content">


          <NavBar />



        <div className="main">
        <Grid padded columns={2}>

        <Grid.Column mobile={16} tablet={16} computer={13}>
         <Switch>
            <Route path="/about" exact strict component={About} />
            <Route path="/contact" exact strict component={Contact} />
            <Route path="/posts" exact strict component={PostIndex} />
            <Route path="/team" exact strict component={Team} />
            <Route path="/" exact render={() => (<Redirect to="/posts"/>)} />
            <Route path="/pagenotfound" exact strict component={PageNotFound} />
            <Route path="/songsubmission" exact strict component={SongSubmission} />
            <Route path={"/post/:slug"} exact strict component={PostShow} />
            <Route path={"/tag/:tag"}  exact strict component={Tags} />
            <Route path={"/search/:query"}  exact strict component={Search} />
            <Redirect to="/pagenotfound" />
          </Switch>
          </Grid.Column>

          <Grid.Column width={3} only='computer'>
          <SideBar className = "sidenav" />
          </Grid.Column>
            </Grid>
        </div>



    </div>
    <Footer />
    </div>
  </Router>

);


export default Routes
