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
        <Project name='project 1' url='#' />
        <Project name='project 2' url='#' />
        <Project name='project 2' url='#' />
      </div>
      <Button text='View my Github' src='#' url='#' />
    </Container>
  );
};

export default ProjectPage;
