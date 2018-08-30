import React, {Component} from 'react';
import axios from 'axios';
import {Form, Message} from 'semantic-ui-react'

export default class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
       name: '', email: '', body: ''
     }
   }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const {name, email, body} = this.state
    this.setState({ name: name, email: email, body: body})

    axios.post('/api/contact', {
        email: this.state.email,
        name: this.state.name,
        body: this.state.body
      })
      .then(response => {
        console.log(response);
        window.alert(response.data.message)

      })
      .catch(error => {
        console.log(error);
        window.alert("There was an error submitting the form. Please try again")
      });

    this.setState({ email: '', name: '', body: ''});
  }



  render () {
    const {name, email, body} = this.state
    return (
  <div>
      <h3 className = "centered"> Contact us </h3>
      <div className="ui section divider"></div>
      <div><p>Intersted in connecting? Leave us a message and we&#39;ll get back you as soon as possible.</p></div>
      <h4> Form: </h4>
      <div>
      <Form error success size={'large'} onSubmit={this.handleSubmit}>

      <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} width={4}/>
      <Form.Input placeholder='Email' name='email' type='email' value={email} onChange={this.handleChange} width={4}/>
      <Form.TextArea placeholder='Message' name='body' type='body' value = {body} onChange={this.handleChange} width={12}/>
      <Form.Button content='Submit' />



      </Form>
      </div>

      </div>
      );

    }

}
