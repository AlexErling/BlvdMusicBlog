import React, {Component} from 'react';
import {Menu, Search} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: [this.props.to]
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
<div>
    <div>
      <h1 className = "centered"> thisisthesong </h1>
    </div>
    <Menu stackable pointing secondary>
      <Menu.Item as={NavLink} to='/posts'name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
      </Menu.Item>
      <Menu.Item as={NavLink} to='/about'name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
        About
      </Menu.Item>
      <Menu.Item as={NavLink} to='/team' name='meettheteam' active={activeItem === 'meettheteam'} onClick={this.handleItemClick} href='/meetthestaff' link>Meet the team</Menu.Item>
      <Menu.Item as={NavLink} to='/songsubmission'name='songsubmission' active={activeItem === 'songsubmission'} onClick={this.handleItemClick} href="songsubmission">Song Submission</Menu.Item>
      <Menu.Item as={NavLink} to= '/contact' active={activeItem === 'contact'}>Contact</Menu.Item>
      <Menu.Item position='right'>
        <Search/>
      </Menu.Item>
    </Menu>
</div>
  );
}

}

export default NavBar
