import React, {Component} from 'react';
import {Icon, Grid} from 'semantic-ui-react';
import InstagramFeed from '../socialMedia/InstagramFeed.js'

export default class About extends Component {


  render() {

    return(
  <div>
      <Grid  textAlign='center'>
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
    <h3> Social Media:</h3>
    </Grid.Row>

    <Grid.Row>

    <a href="https://twitter.com/_ThisIsTheSong_" target="_blank" rel="noopener noreferrer"><Icon circular className = "twitter" size='large' name = "twitter"/></a>
    <a href="https://soundcloud.com/thisisthesongblog"><Icon circular className = "soundcloud" size='large' name = "soundcloud"/></a>
    <a href="https://open.spotify.com/user/g0sjkx99hjo0afhpe0969lgjv?si=0aHabul3SoCzypBeqzXIKA"><Icon circular className = "spotify" size='large' name = "spotify"/></a>
    <a href="https://www.instagram.com/thisisthe_song/"><Icon circular className = "instagram" size='large' name = "instagram"/></a>
      </Grid.Row>

      <div className="ui section divider"></div>


      <Grid.Row>
      <h3> Add us on Instagram! </h3>
      </Grid.Row>
      <Grid.Row>
      <InstagramFeed/>
    </Grid.Row>
    </Grid>
  </div>
)}
};
