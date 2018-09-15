import React, {Component} from 'react';
import { Timeline } from 'react-twitter-widgets';
import {Icon} from 'semantic-ui-react';
class SideBar extends Component {

  render(){
    return (
      <div className = "float sticky">
        <h3 className="centered" > Follow Us On Social Media!</h3>
        <div className="ui section divider"></div>
      <div className = "centered">



      <a href="https://twitter.com/_ThisIsTheSong_" target="_blank" rel="noopener noreferrer"><Icon circular className = "twitter" size='large' name = "twitter"/></a>
      <a href="https://soundcloud.com/thisisthesongblog"><Icon circular className = "soundcloud" size='large' name = "soundcloud"/></a>
      <a href="https://open.spotify.com/user/g0sjkx99hjo0afhpe0969lgjv?si=0aHabul3SoCzypBeqzXIKA"><Icon circular className = "spotify" size='large' name = "spotify"/></a>
      <a href="https://www.instagram.com/thisisthe_song/"><Icon circular className = "instagram" size='large' name = "instagram"/></a>
      </div>
      <div className="ui section divider"></div>
      <div className="iframeContainer">
      <iframe title='Spotify Playlist' src="https://open.spotify.com/embed/user/g0sjkx99hjo0afhpe0969lgjv/playlist/7loCkML9GFAMubkoXXZua0" width="100%" height="400" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className="ui section divider"></div>

      <div width="100%">
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: '_ThisIsTheSong_'
        }}
        options={{
          username: '_ThisIsTheSong_',
          height: '500'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
      />
      </div>




      <div className="ui section divider"></div>
</div>
);
  }
}


export default SideBar
