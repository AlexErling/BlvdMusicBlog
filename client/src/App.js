import React, { Component } from 'react';
import './App.css';
import Routes from './components/routes/Routes'


class App extends Component {
  render() {
      return (
          <div className="App Site container">
            <Routes />
          </div>
      );
  }
}

export default App;
