import React, { Component } from 'react';
import './../index.css';
import NavBar from './NavBar';
import Banner from './Banner';
import ProjectPage from './ProjectPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <ProjectPage />
      </div>
    );
  }
}

export default App;
