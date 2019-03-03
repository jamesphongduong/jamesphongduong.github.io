import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './../index.css';
import NavBar from './NavBar';
import Banner from './Banner';
import ProjectPage from './ProjectPage';
import MePage from './MePage';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Container>
          <ProjectPage />
          <hr />
          <MePage />
          <hr />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
