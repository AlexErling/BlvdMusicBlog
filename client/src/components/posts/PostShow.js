import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react';
import {FacebookShareButton, TwitterShareButton} from 'react-share';
import {Button, Icon, Grid} from "semantic-ui-react"
import ReactHtmlParser from 'react-html-parser';
import FacebookProvider, { Comments } from 'react-facebook';

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
    .get(`/api/posts/${params.slug}`)
      .then(response => {
        console.log(response);
        this.setState({ post: response.data});
      })
      .catch(error => {window.location.href="/PageNotFound"});
  }

  render() {
    console.log(this.props)
    return (
      <div>

            {this.state.post && <Post key={this.state.post.id} post={this.state.post}/>}
      </div>
    );
  }
}

class Post extends Component {

  render() {
    var url = window.location.href
    var dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
    var date = new Date(this.props.post.created_at).toLocaleDateString("en-US", dateOptions)
    var tagLength = this.props.post.tag_list.length
    var tagList = this.props.post.tag_list.map(function(tags, index){
      return <li key = {index}><Link to={'/tag/'+ tags }>{tags}{index < tagLength - 1 && ', '}</Link></li>
    })

    return (

      <div>
        <div className="centered">
          <h3>{this.props.post.title}</h3>
          <small className ="small" >{this.props.post.post_type}  | Posted by: <Link to={'/team/' + this.props.post.user.slug}>  {this.props.post.user.name}</Link> | {date} | Tags: {tagList} </small>
        </div>
        <div className="ui section divider"></div>
        <div className="centered">
          <Image className="centered image" src={this.props.post.image}/>
        </div>
        <div className="ui section divider"></div>
        <div>
          <div className = "postBody"> {ReactHtmlParser(this.props.post.body)}</div>
  
          <div className="ui section divider"></div>
          <div className = "link centered">{ReactHtmlParser(this.props.post.link)}</div>
          <div className="ui section divider"></div>
          <Grid>
            <Grid.Row columns={2} divided>
              <Grid.Column>
                <FacebookShareButton  url={url} quote={this.props.post.title}>
                  <Button fluid color='facebook'>
                    <Icon name='facebook' /> Share
                  </Button>
                </FacebookShareButton>
              </Grid.Column>
              <Grid.Column>
                <TwitterShareButton url={url}  via="_ThisIsTheSong_" title={this.props.post.title}>
                  <Button fluid color='twitter'>
                    <Icon name='twitter' /> Tweet
                  </Button>
                </TwitterShareButton>
              </Grid.Column>
            </Grid.Row>
          </Grid>
            <div className="ui section divider"></div>
        </div>
        <div>

          <FacebookProvider appId="259352021566127">
          <Comments href={url}/>
          </FacebookProvider>
          </div>
      </div>
    );
  }
}
