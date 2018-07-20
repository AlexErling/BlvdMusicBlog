import React from 'react';
import {Menu, Image} from 'semantic-ui-react'

const Footer = () => (
  <div class="ui inverted vertical footer segment">
  <Image src="assets/images/logo.png" class="ui centered mini image"/>
    <div class="ui horizontal inverted small divided link list">
        <a class="item" href="/admin">Site Map</a>
        <a class="item" href="/contact">Contact Us</a>
        <a class="item" href="#">Terms and Conditions</a>
        <a class="item" href="#">Privacy Policy</a>
    </div>
    <div class="ui inverted section divider"></div>

    <p>Copyright © 2015 thissongslaps.com</p>
  </div>
);


export default Footer
