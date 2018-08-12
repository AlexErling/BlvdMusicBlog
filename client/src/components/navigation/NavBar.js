import React, {Component} from 'react';
import {Menu,  Icon} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../search/SearchBar'

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: [this.props.to],
      value: ""
    }
    this.handler = this.handler.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    handler() {
      this.setState({ activeItem: 'search' });
    }


  render() {
    const { activeItem } = this.state
    console.log(this.state.value)
    return (
<div>
    <div className = "centered nav">
       <h1 className = "inline"> thisisthesong </h1>
    </div>
    <Menu stackable pointing secondary>
      <Menu.Item as={NavLink} to='/posts'name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
      </Menu.Item>
      <Menu.Item as={NavLink} to='/about'name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
        About
      </Menu.Item>
      <Menu.Item as={NavLink} to='/team' name='meettheteam' active={activeItem === 'meettheteam'} onClick={this.handleItemClick} href='/meetthestaff' link>Meet the team</Menu.Item>
      <Menu.Item as={NavLink} to='/songsubmission' name='songsubmission' active={activeItem === 'songsubmission'} onClick={this.handleItemClick}>Song Submission</Menu.Item>
      <Menu.Item as={NavLink} to= '/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>Contact</Menu.Item>

      <Menu.Item >
      <a href="https://soundcloud.com" target="_blank"><Icon name="soundcloud" color="orange" size="large" /></a>
      </Menu.Item>
      <Menu.Item >
      <a href="https://spotify.com" target="_blank"><Icon name = "spotify" color="green" size="large" /></a>
      </Menu.Item>
      <Menu.Item >
      <a href="https://twitter.com" target="_blank"><Icon name = "twitter"color="blue" size="large" /></a>
      </Menu.Item>

      <Menu.Item position ="right" >
      <SearchBar action={this.handler} />
      </Menu.Item>
    </Menu>
</div>
  );
}

}

export default NavBar
