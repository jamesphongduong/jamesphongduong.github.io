import React from 'react';
import { Container } from 'semantic-ui-react';
import Project from './Project';
import Button from './Button';
import Heading from './Heading';

const ProjectPage = () => {
  return (
    <Container id='projects'>
      <Heading src='/images/idea.svg' title='My Projects' />
      <div className='test'>
        <Project
          name='oneUp'
          src='/images/oneUp.png'
          content='Social Media web app based on challenges. Users can view and complete social challenges.'
          url='http://1up-app.s3-website-ap-southeast-2.amazonaws.com'
        />
      </div>
    </Container>
  );
};

export default ProjectPage;
