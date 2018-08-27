import React, {Component} from 'react';
import axios from 'axios';
import { Grid, Image } from 'semantic-ui-react'


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
          <Grid stackable columns='equal'>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <h3>This Is The Song Team</h3>
            </Grid.Column>
          </Grid.Row>
          <div className="ui section divider"></div>
          <Grid.Row>
          {this.state.team.map((member) => {
            return(
              <Grid.Column textAlign='center'>
              <div key = {member.id}>
              {member.name}
              </div>
              </Grid.Column>
            )
          })}
          </Grid.Row>
          </Grid>
      </div>

    );
  }

}

export default Team
