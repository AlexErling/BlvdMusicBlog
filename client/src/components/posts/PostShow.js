import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



export default class PostShow extends Component {

constructor(props) {
  super(props)
  this.state = {
    post: null
  };
}

componentDidMount() {
  const { match: { params } } = this.props;
  axios
    .get(`/api/posts/${params.postId}`)
    .then(response => {
      console.log(response);
      this.setState({ post: response.data});
    })
    .catch(error => console.log(error));

}

  render() {
    return (
      <div>
            {this.state.post && <Post post={this.state.post}/>}
      </div>
    );
  }
}

class Post extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    var dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
    var date = new Date(this.props.post.created_at).toLocaleDateString("en-US", dateOptions)
    var tagLength = this.props.post.tag_list.length
    var tagList = this.props.post.tag_list.map(function(tags, index){
      return     <li><Link to={'/tag/'+ tags }>{tags}{index < tagLength - 1 && ', '}</Link></li>
    })


    return (
      <div>
        <div className="centered">
            <h3>{this.props.post.title}</h3>
            <small className ="small" >{this.props.post.post_type}  | Posted by {this.props.post.user.name} on {date} | Tags: {tagList} </small>
        </div>
        <div className="centered">
          <img className="image" src={this.props.post.image}/>
        </div>
        <div>
          <p className= "postBody"> {this.props.post.body} </p>
          <p className = "songTitle"> {this.props.post.song_title} </p>
          <div className = "link" dangerouslySetInnerHTML={{ __html: this.props.post.link }} />
        </div>
      </div>
    );
  }
}
