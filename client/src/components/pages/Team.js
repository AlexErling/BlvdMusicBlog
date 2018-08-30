import React, {Component} from 'react';
import axios from 'axios';
import { Grid} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

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
                <Link to={'/team/'+ member.slug }>{member.name}</Link>
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
