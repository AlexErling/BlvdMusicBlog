import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Loader, Grid, Button, Icon, Pagination} from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';


class PostIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      activePage: 1,
      perPage: 12,
      totalResults: 0,
      hasMore: true,
      isLoading: false,
      page: 1,
      scrolling: false
    }
  }




  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage })
    this.fetchMoreData()
     window.scrollTo(0, 0)
  }


  componentDidMount() {
    this.loadPosts();
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = (e) => {
    const {scrolling, hasMore, page} = this.state
    if (scrolling) return
    if(!hasMore) return
    var lastLi = document.querySelector('.post:last-child')
    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.loadMore()
      console.log(true)
    }
  }

  loadPosts = () => {
    console.log(this.state.page)
    const {perPage, page} = this.state
    axios
      .get(`/api/posts?per_page=${perPage}&page=${page}`)
      .then(response => {
        if (response.data.length===0){
          this.setState({hasMore: false})
          return
        }
        this.setState({posts: this.state.posts.concat(response.data), scrolling: false });
        console.log(response)
      })
      .catch(error => console.log(error));
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page+1,
      scrolling: true,
    }), this.loadPosts)
  }




  render() {
    return (
      <div>
      <h3 className = "centered"> Posts </h3>
      <div className="ui section divider"></div>


      <Grid  >
      <Grid.Row id = "posts">
          {this.state.posts.map(post =>
              <Grid.Column className= "post" key = {post.id} mobile={16} tablet={8} computer={4}>
              <Link to={'/post/'+ (post.slug) }>
                <div className = "imgContainer centered">
                  <img className = "thumbImage" src = {post.thumb}/>
                  <div className = "overlay">
                    <h6 className ="text">{post.title}</h6>
                  </div>
                </div>
              </Link>
              </Grid.Column>
          )}
      </Grid.Row>
      <div className="ui section divider"></div>
          </Grid>



      </div>
    );
  }
}



export default PostIndex
