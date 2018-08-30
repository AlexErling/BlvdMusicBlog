import React, {Component} from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class InstagramFeed extends Component {

  constructor(props) {
    super(props)
    this.state = {
      instagram: [],
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=8492775955.1677ed0.df2080b82fac432c946435a080e7ef0f&count=5`)
      .then(response => {
        console.log(response);
        this.setState({ instagram: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {

    const instadata = this.state.instagram.data

    return (
      <Carousel className = "insta" autoPlay infiniteLoop interval={10000} transitionTime={2000} stopOnHover>
  {instadata && instadata.map((post, index) => {
    return(
      <div key={index}><img src={post.images.standard_resolution.url} alt={post.caption.text}/><a href={post.link} target="_blank" rel="noopener noreferrer"><p className="legend">{post.caption.text}</p></a></div>
    )
  })}
  </Carousel>
);

  }

}
