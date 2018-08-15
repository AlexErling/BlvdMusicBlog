import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Loader} from 'semantic-ui-react';

class PostIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      pageIndex: 1,
      hasMore: true
    }
  }

  componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {
    setTimeout(() => {
    axios
      .get(`/api/posts/?per_page=5&page=${this.state.pageIndex}`)
      .then(response => {
        if (response.data.length===0){
          this.setState({hasMore: false})
          return
        }
        this.setState({posts: this.state.posts.concat(response.data), pageIndex: 1 + this.state.pageIndex });
      })
      .catch(error => console.log(error));
    }, 500);
  }

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength = {this.state.posts.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Loader active={this.state.hasMore} inline="centered">Loading</Loader>}
          endMessage={<div className="centered">No more results</div>} >
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
