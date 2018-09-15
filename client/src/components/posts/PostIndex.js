import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Loader, Grid, Button, Icon, Pagination} from 'semantic-ui-react';
import ResizeImage from 'react-resize-image'

class PostIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      activePage: 1,
      perPage: 12,
      total_results: 0,
      hasMore: true,

      isLoading: false
    }
  }

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage })
    this.fetchMoreData()
     window.scrollTo(0, 0)
  }


  componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {
    setTimeout(() => {

    axios
      .get(`/api/posts?per_page=${this.state.perPage}&page=${this.state.activePage}`)
      .then(response => {
        if (response.data.length===0){
          this.setState({hasMore: false})
          return
        }
        this.setState({posts: response.data, total_results: response.headers.total });
        console.log(response)

      })
      .catch(error => console.log(error));
    }, 500);

  }

  render() {
    return (
      <div>
      <h3 className = "centered">Posts</h3>
      <div className="ui section divider"></div>


      <Grid padded>
      <Grid.Row>
          {this.state.posts.map((post) => {
            return(
              <Grid.Column key = {post.id} mobile={16} tablet={8} computer={4}>

<Link to={'/post/'+ (post.slug) }>
  <div className = "imgContainer centered">
    <img className = "thumbImage" src = {post.thumb}/>
    <div className = "overlay">
      <h6 className ="text">{post.title}</h6>
      </div>
  </div>
</Link>

              </Grid.Column>

            )
          })}
          </Grid.Row>
          <div className="ui section divider"></div>
          <Grid.Row centered>

          <Grid.Column width={16}>
          <div className = "centered">
            <Pagination pointing secondary
            activePage={this.state.activePage}
            boundaryRange={0}
            onPageChange={this.handlePaginationChange}
            siblingRange={4}
            ellipsisItem={false}
            totalPages={Math.ceil(this.state.total_results/this.state.perPage)} />
            </div>
          </Grid.Column>

          </Grid.Row>
          </Grid>







      </div>
    );
  }
}



export default PostIndex
