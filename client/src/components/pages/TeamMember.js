import React, {Component} from 'react';
import axios from 'axios';
import {Image, Grid} from 'semantic-ui-react';
import Post from '../posts/Post.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Loader} from 'semantic-ui-react';



class TeamMember extends Component {

  constructor(props) {
    super(props)
    this.state = {
      member: [],
      posts: [],
      pageIndex: 1,
      hasMore: true
    }
  }

  componentDidMount() {

    const { match: { params } } = this.props;
    axios
      .get(`/api/users/${params.slug}`)
      .then(response => {
        console.log(response);
        this.setState({ member: response.data });
      })
      .catch(error => console.log(error));

    this.fetchMoreData();
  }


  fetchMoreData = () => {
    const { match: { params } } = this.props;
    setTimeout(() => {
    axios
      .get(`/api/user_posts?user=${params.slug}&per_page=5&page=${this.state.pageIndex}`)
      .then(response => {
        if (response.data.length===0){
          this.setState({hasMore: false})
          return
        }
        this.setState({posts: this.state.posts.concat(response.data), pageIndex: 1 + this.state.pageIndex });
        console.log(response)
      })
      .catch(error => console.log(error));
    }, 500);
  }


    render() {
      const member = this.state.member
       return(
      <div>

      <Grid>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <h3>{member.name}</h3>
        </Grid.Column>

      </Grid.Row>
            <div className="ui section divider"></div>
      <Grid.Row>
      <Grid.Column width={4}>
      <Image circular bordered className="centered image" src={member.avatar}/>
      </Grid.Column>
      <Grid.Column width={12}>
          <div>
          <b>Bio:</b> {member.bio}
          </div>
          <div>
          <b>Location:</b> {member.location}
          </div>
      </Grid.Column>
      </Grid.Row>
      </Grid>

      <div className="ui section divider"></div>
      <h4 className = "centered"> Checkout posts by {member.name} </h4>
        <InfiniteScroll
          dataLength = {this.state.posts.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Loader active={this.state.hasMore} inline="centered">Loading</Loader>}
          endMessage={<div className="centered">No more results</div>}
          height={600}>

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

export default TeamMember
