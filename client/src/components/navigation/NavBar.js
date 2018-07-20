import React from 'react';
import {Menu, Input, Dropdown} from 'semantic-ui-react'

const NavBar = () => (
  <Menu size ='huge'>
    <Menu.Item href='/'>
      This Is The Song
    </Menu.Item>
    <Dropdown item text='Posts'>
      <Dropdown.Menu>
        <Dropdown.Item>Songs</Dropdown.Item>
        <Dropdown.Item>Playlists</Dropdown.Item>
        <Dropdown.Item>Videos</Dropdown.Item>
        <Dropdown.Item>Events</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item href='/about' link>About</Menu.Item>
    <Menu.Item link>Song Submission</Menu.Item>
    <Menu.Item href='contact' link>Contact</Menu.Item>
    <Menu.Item position='right'>
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>

  </Menu>
);

export default NavBar
