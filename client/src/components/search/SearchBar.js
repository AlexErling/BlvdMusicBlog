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
      console.log(response.data)
      this.setState({ results: response.data});
      })
      .catch(error => console.log(error));
    }

   handleFormSubmit = () => {
     this.props.history.push({pathname: `/search/${this.state.query}`, state: {results: this.state.results}})
     this.resetComponent()
   }

   handleResultSelect = (e, { result }) => {this.handleInputChange(result.title)}

  handleInputChange = (query) => {
    this.setState({ isLoading: true, query: query })
    this.search(query);

    setTimeout(() =>
      this.setState({
      isLoading: false,
      }) , 300
    )
  }

  render () {

    const resultRenderer = ({ title }) => <List content = {title}/>
    return (

      <Form onSubmit={this.handleFormSubmit}>
      <Search
        loading={this.state.isLoading}
        onSearchChange={(event) => {this.handleInputChange(event.target.value)}}
        onResultSelect={this.handleResultSelect}
        showNoResults={false}
        value={this.state.query}
        results={this.state.results}
        resultRenderer={resultRenderer}
        type={"submit"}
        { ...this.props}  />
      </Form>

    );
  }
}


export default withRouter (SearchBar)
