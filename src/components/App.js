import React, { Component } from 'react';
import './../index.css';
import NavBar from './NavBar';
import Banner from './Banner';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
      </div>
    );
  }
}

export default App;
