import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react'



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
            {this.state.post && <Post key={this.state.post.id} post={this.state.post}/>}
      </div>
    );
  }
}

class Post extends Component {


  render() {
    const Img = () => <Image className=" centered image" src={this.props.post.image} />
    var dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
    var date = new Date(this.props.post.created_at).toLocaleDateString("en-US", dateOptions)
    var tagLength = this.props.post.tag_list.length
    var tagList = this.props.post.tag_list.map(function(tags, index){
      return     <li key = {index}><Link to={'/tag/'+ tags }>{tags}{index < tagLength - 1 && ', '}</Link></li>
    })


    return (


      <div>
        <div className="centered">
            <h3>{this.props.post.title}</h3>
            <small className ="small" >{this.props.post.post_type}  | Posted by {this.props.post.user.name} | {date} | Tags: {tagList} </small>
        </div>
        <div className="ui section divider"></div>
        <div className="centered">
          <Img />
        </div>
        <div className="ui section divider"></div>
        <div>
          <p className= "postBody"> {this.props.post.body} </p>
          <div className="ui section divider"></div>
          <p className = "songTitle centered"> {this.props.post.song_title} </p>
          <div className="ui section divider"></div>
          <div className = "link centered" dangerouslySetInnerHTML={{ __html: this.props.post.link }} />
        </div>
        <div className="ui section divider"></div>
      </div>
    );
  }
}
