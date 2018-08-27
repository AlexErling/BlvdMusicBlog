import React, {Component} from 'react';
import { Timeline } from 'react-twitter-widgets';

class SideBar extends Component {

  render(){
    return (
      <div className = "float sticky">
      <h3 className="centered" >Check us out on Twitter!</h3>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: '_ThisIsTheSong_'
        }}
        options={{
          username: '_ThisIsTheSong_',
          height: '800'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
      />
</div>
);
  }
}


export default SideBar
