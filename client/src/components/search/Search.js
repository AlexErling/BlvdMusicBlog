import React, {Component} from 'react';
import Post from './../posts/Post.js';

class Search extends Component {

    render() {
      const results = this.props.location.state.results
      const result = results.length == 1 ? "result" : "results"
      const num_results = results.length == 0 ? "No" : results.length
      console.log(results)
      return(

        <div>
          <div className = "heading centered">
            <h3> Showing results for "{this.props.match.params.query}" </h3>
            <h5><i>{num_results} {result} found </i></h5>
          </div>
          <div className="ui section divider"></div>
          <div>
          {results.map((post) => {
            return(
                <Post key = {post.id} post={post}/>
            )
          })}
          </div>
        </div>
      );
    }
}

export default Search
