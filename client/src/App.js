import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar'
import Footer from './components/navigation/Footer'
import Routes from './components/routes/Routes'

class App extends Component {
  render() {
    return (

      <div className="App">
            <NavBar />
            <Routes />
            <Footer />

      </div>
    );
  }
}

export default App;
