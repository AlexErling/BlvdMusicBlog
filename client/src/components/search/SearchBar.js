import React, {Component} from 'react';
import {Search, List, Form} from 'semantic-ui-react';
import {browserHistory,withRouter} from "react-router-dom"
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {query: '', results: [], isLoading: false}
  }

  componentWillMount() {
     this.resetComponent()
   }

   resetComponent = () => this.setState({ isLoading: false, results: [], query: '' })

   search(query) {
     this.setState({ query });
     axios
       .get(`/api/search?query=${query}`)
       .then(response => {
         this.setState({ results: response.data});
       })
       .catch(error => console.log(error));
   }

   handleFormSubmit = () => {
   console.log('search:', this.state.query);
   this.props.action
   this.props.history.push({pathname: `/search/${this.state.query}`, results: `${this.state.results}`})
   this.resetComponent()



 }


  handleInputChange = (query) => {
    this.search(query);
    this.setState({ isLoading: true, query })

    setTimeout(() =>
      this.setState({
        isLoading: false,
      }) , 300)

  }

  handleResultSelect = (e, { result }) => this.setState({ query: result.title}  )

  render () {

    const resultRenderer = ({ title }) => <List content = {title}/>
    return (

      <Form onSubmit={this.handleFormSubmit}>
      <Search
        loading={this.state.isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={(event) => {this.handleInputChange(event.target.value)}}
        showNoResults={false}
        value={this.state.query}
        resultRenderer={resultRenderer}
        results ={this.state.results}
        type={"submit"}
        { ...this.props}  />
      </Form>

    );
  }

}


export default withRouter (SearchBar)
