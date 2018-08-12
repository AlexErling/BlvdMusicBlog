import React, {Component} from 'react';
import axios from 'axios';
import Post from './../posts/Post.js';
import {browserHistory,withRouter} from "react-router-dom"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }


    render() {
      return(

        <div>
          <div className = "heading centered">
            <h1> Search results for: {this.props.match.params.query} </h1>
          </div>
          {this.state.results.map((post) => {
            return(
                <Post key = {post.id} post={post}/>

            )
          })}
        </div>
      );

    }
}

export default withRouter(Search)
