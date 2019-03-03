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
        <Project name='oneUp' src='/images/oneUp.png' />
        <Project name='oneUp' src='/images/oneUp.png' />
        <Project name='oneUp' src='/images/oneUp.png' />
      </div>
      <Button
        text='View my Github'
        src='/images/github.svg'
        url='https://github.com/jamesphongduong'
      />
    </Container>
  );
};

export default ProjectPage;
