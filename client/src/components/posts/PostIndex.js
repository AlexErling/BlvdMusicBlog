import React, {Component} from 'react';
import axios from 'axios';
import styles from './posts.css';
import Post from './Post.js';

class PostIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios
      .get("/api/posts")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div className = "heading centered">
          <h1> Posts </h1>
        </div>
        {this.state.posts.map((post) => {
          return(
              <Post key = {post.id} post={post}/>

          )
        })}
      </div>
    );
  }

}

export default PostIndex
