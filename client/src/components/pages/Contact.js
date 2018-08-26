import React from 'react';
import {Link} from 'react-router-dom';
import ReactContactForm from 'react-mail-form';


const Contact = () => (
  <div>
    <h4>
    <p>For business inquiries email us at thisisthesongblog@gmail.com</p>
    <p>For song submissions: <Link to={'/songsubmission'}>Click Here</Link></p>
    <p>We look forward to getting back to you as soon as possible</p>
    </h4>
    <ReactContactForm to="thisisthesongblog@gmail.com" />




  </div>
);


export default Contact
