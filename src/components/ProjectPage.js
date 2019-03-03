import React from 'react';
import { Container } from 'semantic-ui-react';
import Project from './Project';
import Button from './Button';
import Heading from './Heading';

const ProjectPage = () => {
  return (
    <Container>
      <Heading src='/images/idea.svg' title='My Projects' />
      <div className='test'>
        <Project
          name='oneUp'
          src='/images/oneUp.png'
          content='Social Media web app based on challenges. Users can view and complete social challenges.'
          url='http://1up-app.s3-website-ap-southeast-2.amazonaws.com'
        />
        <Project name='oneUp' src='/images/oneUp.png' />
        <Project name='oneUp' src='/images/oneUp.png' />
      </div>
      {/* <Button
        text='View my Github'
        src='/images/github.svg'
        url='https://github.com/jamesphongduong'
      /> */}
    </Container>
  );
};

export default ProjectPage;
