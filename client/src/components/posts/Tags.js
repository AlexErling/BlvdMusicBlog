import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post.js';

class Tags extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tags: []
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios
      .get(`/api/tags/${params.tag}`)
      .then(response => {
        console.log(response);
        this.setState({ tags: response.data });
      })
      .catch(error => console.log(error));
  }


  render() {
    return(
      <div>
        <div className = "heading centered">
          <h3> Tag: {this.props.match.params.tag} </h3>
        </div>
        {this.state.tags.map((tag) => {
          return(
              <Post key = {tag.id} post={tag}/>
          )
        })}
      </div>
    );
  }
}

export default Tags
