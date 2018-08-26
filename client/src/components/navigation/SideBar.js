import React, {Component} from 'react';
import { Timeline } from 'react-twitter-widgets';

class SideBar extends Component {

  render(){
    return (
      <div className = "float sticky">
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
