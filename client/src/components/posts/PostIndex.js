import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post.js';
import InfiniteScroll from 'react-infinite-scroll-component';


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

        <InfiniteScroll
        dataLength = {this.state.posts.length}
        hasMore={true}
        loader={<h4>Loading...</h4>}>
        <div className = "heading centered">
          <h1> Posts </h1>
        </div>
        {this.state.posts.map((post) => {
          return(
              <Post key = {post.id} post={post}/>

          )
        })}
        </InfiniteScroll>
      </div>
    );
  }

}

export default PostIndex
