import React, {Component} from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react'

class Team extends Component {

  constructor(props) {
    super(props)
    this.state = {
      team: []
    }
  }

  componentDidMount() {
    axios
      .get("/api/users")
      .then(response => {
        console.log(response);
        this.setState({ team: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Card.Group>
          {this.state.team.map((member) => {
            return(
              <div key = {member.id}>
                <Member member={member}/>
              </div>
            )
          })}
        </Card.Group>
      </div>

    );
  }

}

export default Team


class Member extends Component {

  render(){
    return (
      <div className = "card">
          <Card >
      <Card.Content>
        <Image size='medium' centered src={this.props.member.avatar} />
        <Card.Header>{this.props.member.name}</Card.Header>
        <Card.Meta>{this.props.member.location}</Card.Meta>
        <Card.Description>{this.props.member.bio}.</Card.Description>
      </Card.Content>
          </Card>
      </div>
    );
  }
}
