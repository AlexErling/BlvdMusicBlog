import React, {Component} from 'react';
import ToggleDisplay from 'react-toggle-display';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class Post extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleClick() {
  this.setState({
    show: !this.state.show
  });
}

  render() {
    var dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
    var date = new Date(this.props.post.created_at).toLocaleDateString("en-US", dateOptions)
    var tagLength = this.props.post.tag_list.length
    var tagList = this.props.post.tag_list.map(function(tags, index){
      return     <li key = {index}><Link to={'/tag/'+ tags }>{tags}{index < tagLength - 1 && ', '}</Link></li>
    })


  return (
      <div>

            <div className = "title">
                <h3> <Link to={'/post/'+this.props.post.id }>{this.props.post.title}</Link>  </h3>
                <small className ="small" >{this.props.post.post_type}  | Posted by {this.props.post.user.name} | {date} | Tags: {tagList} </small>
            </div>
            <ToggleDisplay show={this.state.show}>
              <div className="ui section divider"></div>

              <div className= "postBody" dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
              <div className="ui section divider"></div>
              <p className = "songTitle"> {this.props.post.song_title} </p>
              {this.state.show? (<div className = "link" dangerouslySetInnerHTML={{ __html: this.props.post.link }} />) : ("")}



           </ToggleDisplay>
           <div className = "centered">
            <Button circular compact size='mini' basic color = "blue" onClick={ () => this.handleClick() }>
              {this.state.show ? ( <div> <Icon name="angle double up"/> <span>Show Less </span> </div>)
                : ( <div> <Icon name="angle double down"/> <span>Show More </span> </div>)
              }
            </Button>
          </div>
          <div className="ui section divider"></div>
      </div>
    )
  };
}

export default Post
