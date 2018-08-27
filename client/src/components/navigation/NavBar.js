import React, {Component} from 'react';
import {Menu,  Icon, Grid} from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import SearchBar from '../search/SearchBar'

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: "active"
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    console.log(this.props.to)
    return (
<div>
    <div className = "centered nav">
      <Link to={'/posts'} style={{ textDecoration: 'none', color: 'black'}} onClick={this.handleItemClick} name='home'> <h1 className = "inline"> thisisthesong </h1></Link>
    </div>
    <Menu secondary stackable >
      <Menu.Item color="blue" as={NavLink} to='/posts' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
      </Menu.Item>
      <Menu.Item color="blue" as={NavLink} to='/about'name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
        About
      </Menu.Item>
      <Menu.Item color="blue" as={NavLink} to='/team' name='meettheteam' active={activeItem === 'meettheteam'} onClick={this.handleItemClick} href='/meetthestaff' link>Meet the team</Menu.Item>
      <Menu.Item color="blue" as={NavLink} to='/songsubmission' name='songsubmission' active={activeItem === 'songsubmission'} onClick={this.handleItemClick}>Song Submission</Menu.Item>
      <Menu.Item color="blue" as={NavLink} to= '/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>Contact</Menu.Item>
      <Menu.Item position ="right" >
      <SearchBar />
      </Menu.Item>
    </Menu>
</div>
  );
}

}

export default NavBar
