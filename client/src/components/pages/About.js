import React, {Component} from 'react';
import {Icon, Grid} from 'semantic-ui-react';
import Instafeed from 'react-instafeed';

export default class About extends Component {


  render() {
    const instafeedTarget = 'instafeed';
    return(
  <div>
      <Grid  textAlign='center' padded>
      <Grid.Row>
      <h3> About us </h3>
      </Grid.Row>
      <div className="ui section divider"></div>
      <Grid.Row>
      <Grid.Column width={16}>
    <p>
      Welcome to ThisIsTheSong.com! Thank you for checking out the site.
      We created this site to bring you the best electronic music out there.
      Our goal is to find the best songs, and artists out there, as well as keep you updated on whats going on in the music world. We do all the searching for you so all you have to do is check out our site and get instant access to great songs.
      We love listening to music, and we are excited to share what we find with you.
    </p>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <p>
      Cheers,
    </p>
    </Grid.Row>
    <Grid.Row>
    <p>
      Alex, Nick, & Ryan
    </p>
    </Grid.Row>


    <div className="ui section divider"></div>

    <Grid.Row>
    <h3> Follow us on Social Media:</h3>
    </Grid.Row>

    <Grid.Row>
    <Icon circular className = "faebook" size='large' name = "facebook"/>
    <Icon circular className = "twitter" size='large' name = "twitter"/>
    <Icon circular className = "soundcloud" size='large' name = "soundcloud"/>
    <Icon circular className = "spotify" size='large' name = "spotify"/>
    <Icon circular className = "instagram" size='large' name = "instagram"/>
      </Grid.Row>
    </Grid>

    <div id={instafeedTarget}>
  <Instafeed
    limit='5'
    ref='instafeed'
    resolution='standard_resolution'
    sortBy='most-recent'
    target={instafeedTarget}
    template=''
    userId='8492775955'
    clientId='d5fd3eabb0c740c483c6e00d744536cd'
    accessToken='accessTokenInstagramApiString'
  />
</div>


  </div>
)}
};
